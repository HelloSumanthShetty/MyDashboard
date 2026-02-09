import express from 'express';
import { getProduct } from '../controller/client.controller.js'; 
const router = express.Router();
router.route("/products").get(getProduct)
export default router;