import React, { useEffect, useState } from 'react'
import './User.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';


const User = () => {
  const[users, setUsers] = useState([])
  useEffect(()=> {
    const fetchData = async()=>{
      try{

const response = await axios.get("https://cautious-pancake-g4v54xgww6qvfvjg6-5000.app.github.dev/api/users");
      setUsers(response.data)
      }catch(error){
        console.log("Error while fetcching data", error)
      }
    };
    fetchData()
 },[] );
    
  
  return (
    <div className= "userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add User<i className="fa-solid fa-user-plus"></i>
        </Link>
    
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>{
            return(
          <tr>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td className="actionButtons">

              <button type="button" class="btn btn-info">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              
              <button type="button" class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
              </button>
              
              </td>
          </tr>
            )
          }

          )}

        </tbody>
      </table>
     
    </div>
  )
};

export default User
