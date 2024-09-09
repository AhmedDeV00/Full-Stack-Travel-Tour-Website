import express, { Router } from "express";
import { getTours } from "../controllers/Tour.js"

const router = express.Router();

router.get("/tours", getTours);

export default router;