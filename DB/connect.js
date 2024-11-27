const mongoose = require("mongoose")

// const connectDB = (uri) => {
//     console.log("connect database")
//     return mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
// }

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ambitiousbhavi:E0vaauxSOOL0BSPB@cluster19.mv4ukep.mongodb.net/cluster19?retryWrites=true&w=majority&appName=Cluster19");
  } catch (error) {
    console.log("Error occured", error)
  }
}

module.exports = connectDB;