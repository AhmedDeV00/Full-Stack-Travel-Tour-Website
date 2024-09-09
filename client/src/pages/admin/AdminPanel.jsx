import { Link } from "react-router-dom"
import "./admin.css"


function AdminPanel() {
    return (
        <div className="muni-nav">
            <Link to="/AddTour">
                Add New Tour</Link>
            <Link to="/FetchUser">Fetch User</Link>
            <Link to="/DeleteTour"> Delete Tour</Link>
        </div>
    )
}

export default AdminPanel