import express from "express";
import { getAllDevelopers, createDev } from "../controllers/DevController.js";

// init Router
const router = express.Router();

// routing
router.get("/dev", getAllDevelopers);
router.post("/dev", createDev);

// export router
export default router;
