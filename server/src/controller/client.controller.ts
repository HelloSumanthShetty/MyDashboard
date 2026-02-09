import { Request,Response } from "express";
import Product from "../models/product.model.js";
import ProductStat from "../models/productStat.model.js";


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