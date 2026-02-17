import express from 'express';
import { getProduct,getUser, getTransaction, getGeography } from '../controller/client.controller.js'; 
const router = express.Router();
router.route("/products").get(getProduct)
router.route("/customers").get(getUser)
router.route("/transactions").get(getTransaction)
router.route("/geography").get(getGeography)
export default router;