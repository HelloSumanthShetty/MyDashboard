import mongoose from "mongoose";
import User from "../models/user.model.js";
import Transaction from "../models/Transaction.model.js";
import { Request, Response } from "express";
export const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};