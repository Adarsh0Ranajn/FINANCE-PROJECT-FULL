import express from 'express';
import customerRouter from './router/customerRouter';
import * as db from './config/dbConfig';
import cors from "cors";
let app = express();
db.dbConnection;          

app.use(cors());
app.use(express.json());        
app.use("/api",customerRouter);

app.listen(2022,()=>console.log(`Server running on port numuber 2022`));