import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import authroutes from "./routes/authroutes.js";
import cors from "cors";
import morgan from "morgan";

const app = express();

dotenv.config();
connectDb();
//middlewares
app.use(morgan("dev")); // use morgan middleware to log requests in development mode...,, dev means development
app.use(cors()); // use cors middleware
app.use(express.json()); // Parse JSON requests

//routes
app.use("/api/v1/auth", authroutes);

//default route
app.get("/", (req, res) => {
  res.send("<h1>welcome to finance</h1>");
});

const PORT = process.env.PORT || 1011;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
