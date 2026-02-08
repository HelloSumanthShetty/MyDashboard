import express from 'express';
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import clientRouter from "./routes/client.router.js"
import generalRouter from "./routes/general.router.js"
import managementRouter from "./routes/management.router.js"
import salesRouter from "./routes/sales.router.js"
import connectDB from './db/connect.js';
import dotenv from "dotenv";
// import User from './models/user.model.js';
// import { dataUser } from "./data/index.js";
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
app.listen(PORT, async () => {
    try {
    if (!MONGO_URI) {
        console.error("MONGO_URI is not defined in environment variables");
    }
    else {
     await connectDB(MONGO_URI);
        
          //await User.insertMany(dataUser);
    }
    console.log(`Server is running on port ${PORT}`);
}
 catch(error :any){
    console.error("Error starting server:", error.message);
 }
});  