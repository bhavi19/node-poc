const mongoose = require("mongoose")

uri = "mongodb+srv://ambitiousbhavi:E0vaauxSOOL0BSPB@cluster19.mv4ukep.mongodb.net/cluster19?retryWrites=true&w=majority&appName=Cluster19";
const connectDB = () => {
    console.log("connect database")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;