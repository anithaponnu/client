import React, { useState } from 'react';
import './adduser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    const users = {
        name:"",
        email:"",
        address:"",
    };
    const [user, setUsers] = useState(users)
    const navigate = useNavigate();
    const inputHandler = (e) =>{
        const {name, value}=e.target
        console.log(name, value)
        setUsers({...user, [name]:value});
    };
    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("https://cautious-pancake-g4v54xgww6qvfvjg6-5000.app.github.dev/api/user", user)
        .then((response)=>{
            console.log("User created successfully.");
            navigate("/");
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="addUser">
        <Link to="/" type="button" className="btn btn-success"> 
            <i className="fa-solid fa-backward"></i> Back</Link>
        <h3>Add New User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={inputHandler}
                    name='name'
                    autoComplete='off'
                    placeholder='Enter your Name'
                />
            </div>
             <div className="inputGroup">
                <label htmlFor="email">E-mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={inputHandler}
                    name='email'
                    autoComplete='off'
                    placeholder='Enter your email'
                />
            </div>
             <div className="inputGroup">
                <label htmlFor="address">Address</label>
                <input
                    type='name'
                    id='address'
                    onChange={inputHandler}
                    name='address'
                    autoComplete='off'
                    placeholder='Enter your address'
                />
            </div>
             <div className="inputGroup">
                <button type="submit" className="btn btn-primary">Submit</button>
             </div>
        </form>
    </div>
  )
};

export default AddUser;
