import express from "express";
import { addTour, deleteTour, getUsers, fetchTours } from "../controllers/adminController.js";
import { authenticateToken, authorizeAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();


router.post('/add-tour', authenticateToken, authorizeAdmin, addTour);
router.delete('/delete-tour/:id', authenticateToken, authorizeAdmin, deleteTour);
router.get('/users', authenticateToken, authorizeAdmin, getUsers);
router.get('/AllTours', authenticateToken, authorizeAdmin, fetchTours);


export default router;