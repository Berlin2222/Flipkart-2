import Express from "express";
// import dotenv from "dotenv";
import connection from "./Database/db.js";
import DefaultData from "./default.js";

const app = Express();

const PORT = 8000;

const URL = "mongodb://0.0.0.0:27017/Ecommers";
connection(URL);

// dotenv.config();

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

DefaultData();
