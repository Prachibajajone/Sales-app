import express from "express";
import {Register, Login } from "../controller/user-controller.js";



const Router= express.Router();



Router.post('/register', Register)
Router.post('/login', Login)



export default Router;