import express from "express";
import { addsales, getTotalAmount, gettopfivesales } from "../controller/sales-controller.js";


const SalesRouter= express.Router();


SalesRouter.post('/addsales', addsales)
SalesRouter.get('/gettopfivesales', gettopfivesales)
SalesRouter.get('/gettotalsum', getTotalAmount)



export default SalesRouter