import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import data from "./data.js";

dotenv.config();

const app = express();

//parse body of requst
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//conecting to database
//checking if port for database is alredy exzist
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});
//this midelver is for chacking errors
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
