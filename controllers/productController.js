const {StatusCodes} = require("http-status-codes")
const Product = require("../models/Product");

const getAllProducts = async(req,res) => {
    const products = await Product.find({});
    res.status(StatusCodes.CREATED).json({products});
}

const createProduct = async(req, res) => {
    const body = req.body;
    const product = Product.create(req.body);
    res.status(StatusCodes.CREATED).send({product});
}


module.exports = {
    getAllProducts,
    createProduct
}