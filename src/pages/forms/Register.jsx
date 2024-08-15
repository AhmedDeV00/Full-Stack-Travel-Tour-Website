import React, { useState } from 'react'
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirPassword, setConfirPassword] = useState("");

    // Form Submit Handler
    const formSunmitHandler = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            return toast.error("Email or Password Is required!")
        }
        if (username === "") {
            return toast.error("Username Is required!")
        }
        if (confirPassword !== password) {
            return toast.error("Password don't match!")
        }
    }


    return (
        <div className="form-wrapper">
            < ToastContainer />
            <form onSubmit={formSunmitHandler} className="form">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
                <input value={confirPassword} onChange={(e) => setConfirPassword(e.target.value)} type="password" placeholder='Confirm Password' />
                <button className="form-btn">Register</button>
            </form>
        </div>
    )
}

export default Register