import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc    Fetch all products
//@route   GET/api/products
//@access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

//@desc    Get top rated products
//@route   GET/api/products/top
//@access  Public
router.get(
  "/top",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(5);
    res.json(products);
  })
);

//@desc    Fetch single product
//@route   GET/api/products/:id
//@access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
