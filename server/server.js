import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} `);
});

app.use("/api", route);
