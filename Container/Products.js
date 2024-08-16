const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "Get products function" });
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get products function Testing" });
}

module.exports = { getAllProducts, getAllProductsTesting }