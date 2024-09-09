import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a New User

export const RegisterUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json("User Already exists!");
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashPassword
        })
        await newUser.save();
        res.status(200).json("Successfully created!")
    } catch (error) {
        console.log(error);
        res.status(500).json("Failed to create! Try again.");
    }
}

// Login a User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Email Or Password Invalid!")
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json("Email Or Password Invalid!")
        }
        const token = jwt.sign({ id: user.id, role: user.role }, "secretkey");
        res.cookie("token", token,
            { httpOnly: true },);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}
