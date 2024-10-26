import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import "./user.css";

function FetchUser() {

    const fetchUsers = async () => {
        const res = await axios.get("https://travel-tour-6xx0.onrender.com/api/users", {
            withCredentials: true,
        });
        return res.data;
    };


    const { data: users, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div className="fetch-user">
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default FetchUser
