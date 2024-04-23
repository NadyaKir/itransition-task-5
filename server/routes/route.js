import express from "express";
import { generateData } from "../controller/dataController.js";

const route = express.Router();

route.post("/generateData", generateData);

export default route;
