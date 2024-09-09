import db from "./connect.js";
import Tour from "./models/TourList.js";
import { toursList } from "./data.js";

// Connextion To DB
db();

// Import Book
const importTours = async () => {
    try {
        await Tour.insertMany(toursList);
        console.log("Tours Imported!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
if (process.argv[2] === "-import") {
    importTours();
}