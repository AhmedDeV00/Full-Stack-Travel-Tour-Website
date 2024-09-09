import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext.js"
import { useContext } from "react"


function Navbar({ toggle, setToggle }) {
    const { currentUser, Logout } = useContext(AuthContext)

    return (
        <div>
            <nav
                style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                className="navbar"
            >
                <ul className="navbar-links">
                    {!currentUser ? (
                        // Links for unauthenticated users
                        <>
                            <Link to="/login" onClick={() => setToggle(false)} className="navbar-link">
                                <i className="bi bi-arrow-right-square-fill"></i>
                                Login
                            </Link>
                            <Link to="/register" onClick={() => setToggle(false)} className="navbar-link">
                                <i className="bi bi-person-plus-fill"></i>
                                Register
                            </Link>
                        </>
                    ) : (
                        // Links for authenticated users
                        <>
                            <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
                                <i className="bi bi-house-fill"></i>
                                Home
                            </Link>
                            <Link to="/about" onClick={() => setToggle(false)} className="navbar-link">
                                <i className="bi bi-bank2"></i>
                                About
                            </Link>
                            {currentUser && currentUser.role === "admin" && (<Link to="/admin" onClick={() => setToggle(false)} className="navbar-link">
                                <i className="bi bi-person"></i>
                                Admin
                            </Link>)}
                            <button style={{ border: "none", backgroundColor: "#ffff" }}
                                onClick={() => {
                                    Logout();
                                    setToggle(false);
                                }}
                                className="navbar-link"
                            >
                                <i className="bi bi-box-arrow-right"></i>
                                Logout
                            </button>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar