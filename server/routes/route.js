import express from "express";
import {UserSign,UserLogin} from "../controller/usercontroller.js";
import { getProducts,getProductById} from "../controller/getproducts.js";
import stripes from "./stripe.js"

const router=express.Router();

router.post('/signup',UserSign);
router.post('/login',UserLogin);

router.get('/products',getProducts);
// router.get('/product/:id',getProductById);
router.get('/product/:id',getProductById);
router.post('/stripe/create-checkout-session',stripes);

export default router;