import express from "express";
import {UserSign,UserLogin} from "../controller/usercontroller.js";
import { getProducts,getProductById} from "../controller/getproducts.js";
// import stripe from "./stripe.js"

const router=express.Router();

router.post('/signup',UserSign);
router.post('/login',UserLogin);

router.get('/products',getProducts);
// router.get('/product/:id',getProductById);
router.get('/product/:id',getProductById);
// router.post('/stripe',stripe);

export default router;