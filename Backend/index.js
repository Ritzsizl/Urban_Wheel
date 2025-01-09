import express from 'express'
import { connectDB } from './config/db.js';

const app = express();

app.listen(3000, () => {
    console.log("Server is running at Port 3000");
    connectDB();
})