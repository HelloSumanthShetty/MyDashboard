import express from 'express';
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import clientRouter from "./routes/client.router.js"
import generalRouter from "./routes/client.router.js"
import managementRouter from "./routes/client.router.js"
import salesRouter from "./routes/client.router.js"
import connectDB from './db/connect.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(express.json());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Server is running');
});
app.use("/api/client", clientRouter);
app.use("/api/general", generalRouter);
app.use("/api/management", managementRouter);
app.use("/api/sales", salesRouter);
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";
app.listen(PORT,  () => {
    if (!MONGO_URI) {
        console.error("MONGO_URI is not defined in environment variables");
    }
    else {
     connectDB(MONGO_URI);
    }
    console.log(`Server is running on port ${PORT}`);
});