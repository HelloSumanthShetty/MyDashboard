import express from 'express';
import { createUser, getUser } from '../controller/general.controller.js';
const router = express.Router();

router.route("/user").post(createUser);
router.route("/user/:id").get(getUser)

export default router;