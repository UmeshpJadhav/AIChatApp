import express from "express";
import morgan from 'morgan';
import connectDB  from "./config/db";
connectDB();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


export default app;