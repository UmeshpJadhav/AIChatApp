import mongoose from "mongoose";
import { config } from "./config";


const connectDB = () => {
    mongoose.connect(config.databaseUrl as string)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));
}



export default connectDB;