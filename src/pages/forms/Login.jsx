import React, { useState } from 'react'
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Form Submit Handler
    const formSunmitHandler = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            return toast.error("Email or Password invalid!")
        }
    }


    return (
        <div className="form-wrapper">
            < ToastContainer />
            <form onSubmit={formSunmitHandler} className="form">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
                <button className="form-btn">Login</button>
            </form>
        </div>
    )
}

export default Login