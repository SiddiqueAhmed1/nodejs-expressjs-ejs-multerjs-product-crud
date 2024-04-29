import express from "express";
import { adminLogin } from "../controller/adminController.js";

// init router
const router = express.Router();

// admin dashboard request
router.get('/', adminLogin)

// export
export default router;