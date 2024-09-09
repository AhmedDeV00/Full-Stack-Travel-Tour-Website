import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./forms.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import axios from 'axios';
import { AuthContext } from '../../context/authContext';

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Form Submit Handler
    const { Login } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await Login(formData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form-wrapper">
            < ToastContainer />
            <form className="form">
                <input onChange={handleChange} type="email" placeholder='Email' name='email' />
                <input onChange={handleChange} type="password" placeholder='password' name='password' />
                <button type='submit' onClick={handleClick} className="form-btn">Login</button>
            </form>
        </div>
    )
}

export default Login