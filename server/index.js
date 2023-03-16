import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";


const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",Router);


const PORT=8000;
const Username=process.env.Db_user|| 'hrishabh';
const Password=process.env.Db_Password|| 'qAtA6jiBY8ZX4x8G';

Connection(Password)

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`));

DefaultData();
