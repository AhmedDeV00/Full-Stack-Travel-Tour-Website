import Tour from "../models/TourList.js";

export const getTours = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Current page number
        const limit = parseInt(req.query.limit) || 6; // Number of tours per page
        const skip = (page - 1) * limit;
        // Fetch the tours with pagination
        const tours = await Tour.find({}).skip(skip).limit(limit);
        const total = await Tour.countDocuments(); // Total number of tours
        res.status(200).json({ tours, total })
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}
