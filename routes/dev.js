import express from "express";
import {
  getHomePage,
  getContactPage,
  loadAboutPage,
} from "../controllers/DevController.js";

// init Router
const router = express.Router();

// routing
router.get("/dev", getHomePage);
router.get("/contact", getContactPage);
router.get("/about", loadAboutPage);

// export router
export default router;
