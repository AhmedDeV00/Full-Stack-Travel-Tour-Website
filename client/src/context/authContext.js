import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null
    }
    );

    const Login = async (FormData) => {
        try {
            const res = await axios.post("http://localhost:3002/api/auth/login", FormData, {
                withCredentials: true,
            });
            //console.log(res);
            setCurrentUser(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const Logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
    };

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("user");
        }
    }, [currentUser]);
    //console.log(localStorage);

    return (
        <AuthContext.Provider value={{ currentUser, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}
