import express from "express";
import { getSales } from "../controller/sales.controller.js";

const router = express.Router();

router.get("/", getSales);

export default router;