import express from 'express';
import { getProduct,getUser, getTransaction } from '../controller/client.controller.js'; 
const router = express.Router();
router.route("/products").get(getProduct)
router.route("/customers").get(getUser)
router.route("/transactions").get(getTransaction)
export default router;