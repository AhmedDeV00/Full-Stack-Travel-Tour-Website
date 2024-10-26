import jwt from "jsonwebtoken";
import 'dotenv/config'

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log("no token");
        return res.status(401).json("No token provied!")
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json("Invalid Token")
        }
        req.user = user;
        next();
    });
};
// // Middleware to authorize only admin access
export const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        console.log("not an admin");
        return res.status(403).json("Admin Only!")
    }
    next();
};
