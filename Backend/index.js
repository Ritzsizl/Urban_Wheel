import express from 'express'
import { connectDB } from './src/config/db.js';
import authRoute from "./src/routes/authRoutes.js"
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.listen(6000, () => {
    console.log("Server is running at Port 6000");
    connectDB();
})