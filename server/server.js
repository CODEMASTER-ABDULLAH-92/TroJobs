import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db/index.db.js";
import router from "./routes/job.router.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());


connectDB();
  
app.use('/api/job',router);
const PORT = 5001;
        
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
