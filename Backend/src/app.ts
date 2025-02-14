import express from "express";
import morgan from "morgan";
import connectDB from "./config/db";
import globalErrorHandler from "./middleware/errorHandler";


// **Connect MongoDB**
connectDB();

const app = express();

// **Middleware**
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// **Routes**
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use(globalErrorHandler);

export default app;
