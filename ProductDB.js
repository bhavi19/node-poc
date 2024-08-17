require("dotenv").config()

const connectDB = require("./DB/connect");
const Products = require("./Model/Products")

const productJson = require("./Products.json")

const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URL)
        await Products.create(productJson)
        console.log("Success")

    } catch (error) {
        console.log("error", error)
    }
}

start()