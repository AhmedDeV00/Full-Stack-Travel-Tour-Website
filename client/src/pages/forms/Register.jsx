import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import "./forms.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
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
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://travel-tour-6xx0.onrender.com/api/auth/register", formData)
            navigate("/login");
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="form-wrapper">
            < ToastContainer />
            <form className="form">
                <input name='email' onChange={handleChange} type="email" placeholder='Email' />
                <input name='username' onChange={handleChange} type="text" placeholder='Username' />
                <input name='password' onChange={handleChange} type="password" placeholder='Password' />
                <button onClick={handleClick} className="form-btn">Register</button>
            </form>
        </div>
    )
}

export default Register
