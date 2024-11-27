require("dotenv").config()

const connectDB = require("./DB/connect");
const Products = require("./Model/Products")

const productJson = require("./Products.json")

const start = async () => {
    try {
        await connectDB("mongodb+srv://ambitiousbhavi:E0vaauxSOOL0BSPB@cluster19.mv4ukep.mongodb.net/cluster19?retryWrites=true&w=majority&appName=Cluster19")
        await Products.create(productJson)
        console.log("Success", productJson)

    } catch (error) {
        console.log("error", error)
    }
}

start()