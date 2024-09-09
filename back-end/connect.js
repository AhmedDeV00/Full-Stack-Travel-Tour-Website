import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/safariDB");
        console.log("DB Connected successfully!");
    } catch (error) {
        console.log(error);
    }
}
export default db;