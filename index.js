require ("dotenv").config()
const express = require('express');
const app = express();

const connectDB = require("./DB/connect")
const productsRoute = require('./Routes/Products')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//middleware
app.use("/api/products", productsRoute)

const start = async () => {
  await connectDB(process.env.MONGODB_URL)
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
start()
