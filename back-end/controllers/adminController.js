import Tour from "../models/TourList.js"
import User from "../models/User.js";

export const addTour = async (req, res) => {
    try {
        const { id, title, duration, priceFrom, reviews, rating, image } = req.body;
        if (!title || !duration || !priceFrom || !reviews || !rating) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newTour = new Tour({ id, title, duration, priceFrom, reviews, rating, image });
        await newTour.save();
        res.status(201).json(newTour)
    } catch (error) {
        res.status(500).json(error)
    }
};

export const deleteTour = async (req, res) => {
    try {
        const { id } = req.params;
        await Tour.findByIdAndDelete(id);
        res.status(200).json("Tour deleted successfully!")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const fetchTours = async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.json(tours)
    } catch (error) {
        console.log(error);
    }
}