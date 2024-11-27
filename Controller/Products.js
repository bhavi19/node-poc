const Products = require("../Model/Products")

const getAllProducts = async (req, res) => {
    const productData = await Products.find({})
    res.status(200).json({ productData });

    res.status(200).json({ msg: "Get products function Testing" });
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get products function Testing" });
}

module.exports = { getAllProducts, getAllProductsTesting }