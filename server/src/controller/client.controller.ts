import { Request,Response } from "express";
import Product from "../models/product.model.js";
import ProductStat from "../models/productStat.model.js";
import User from "../models/user.model.js";
import Transaction from "../models/Transaction.model.js";


export const getProduct = async(req: Request, res: Response) => {
 try {
    const products = await Product.find()
    const productWithStat = await Promise.all(
        products.map((async (product) => {
          const stat =await ProductStat.find({productId : product._id })
            return {
                ...product.toObject(),
                stat
            }
        })
    ))
    res.status(200).json(productWithStat)
 } catch (error : any) {
    res.status(404).json({succuss : false, message : error.message})
 }
}

export const getUser = async(req: Request, res: Response) =>{
 try {
    const user = await User.find({role : "user"}).select("-password")
    res.status(200).json({success : true, user})
 } catch (error : any) {
    res.status(404).json({succuss : false, message : error.message})
 }
}

export const getTransaction = async(req: Request, res: Response) =>{
 try {
   console.log("working")
   const {page = 1, pageSize = 20, sort = null, search = "" } = req.query
   console.log(page,pageSize,sort, search)
   const pageNumber = Math.max(1,parseInt(page as string,10))
   const limit = Math.max(1,parseInt(pageSize as string,10))
   const skip = (pageNumber - 1) * limit
    const generateSort = (sortValue: any) => {
       const sortParse = JSON.parse(sortValue);
       return {
          [sortParse.field]: sortParse.sort === "asc" ? 1 : -1
       };
    };

    let sortFormatted = {};

    if (typeof sort === "string" && sort !== "[object Object]") {
       sortFormatted = generateSort(sort);
    }
    const searchFilter = search 
  ? {
      $or: [
        { cost: { $regex: search, $options: "i" } },
        { userId: { $regex: search, $options: "i" } },
        // Add { name: { $regex: search, $options: "i" } } here if the field exists
      ],
    } 
  : {};
    const transactions = await Transaction.find(searchFilter ).sort(sortFormatted).skip(skip).limit(limit)

    const total = await Transaction.countDocuments(searchFilter);
    res.status(200).json({success : true, total, transactions})
 } catch (error : any) {
    res.status(500).json({succuss : false, message : error.message})
 }
}