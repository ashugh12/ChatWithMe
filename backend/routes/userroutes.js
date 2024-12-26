import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSidebar } from "../controllers/usercontroller.js";
const router =express.Router()

router.get("/all",getUserForSidebar)

export default router
