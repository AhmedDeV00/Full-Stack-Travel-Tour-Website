import express from "express";
import db from "./connect.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./router/auth.js"
import tourRoutes from "./router/tour.js"
import adminRoutes from "./router/admin.js"
import multer from "multer";
import Tour from "./models/TourList.js";

const app = express();
app.use(express.json());


db();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true
}))
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/tours')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("image"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename)
})

/// Request to get a single tour by ID
app.get('/api/tours/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).send('Tour not found');
        }
        res.send(tour);
    } catch (error) {
        res.status(500).send('Server error');
    }
});


app.use("/api/auth", authRoutes)
app.use("/api", tourRoutes)
app.use("/api", adminRoutes)


app.listen(3002, () => {
    console.log("server is running!");
})