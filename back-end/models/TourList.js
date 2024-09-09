import mongoose from "mongoose";
import db from "../connect.js";
const TourListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviews: {
        type: String,
        required: true,
    },
    priceFrom: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
})

const Tour = mongoose.model("Tour", TourListSchema);




export default Tour;