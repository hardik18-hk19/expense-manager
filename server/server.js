import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
connectDb();

app.get("/", (req, res) => {
  res.send("<h1>welcome to finance</h1>");
});

const PORT = 1011;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
