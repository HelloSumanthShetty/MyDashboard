import { Request, Response } from "express";
import User from "../models/user.model.js";

export const getUser = async (req: Request, res: Response) => {
  try {
   const {id} = req.params;
   if(!id){
    return res.status(400).json({ message: "User ID is required" });
   } 
   const user = await User.findById(id).select("-password");    
   if(!user){
    return res.status(404).json({ message: "User not found" });
   }
    res.status(200).json({success: true, user});
}
  catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }     
}

export const createUser = async (req : Request, res : Response) => {
    try {
          
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({success: true, message: "User created successfully"});
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
}