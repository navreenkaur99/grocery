import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  
  placeOrderStripe,
} from "../controller/order.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();
router.post("/cod", authUser, placeOrderCOD);
router.post("/stripe", authUser, placeOrderStripe);
// router.post("/razorpay", authUser, placeOrderRazorpay);
// router.post("/verify", authUser, verifyRazorpayPayment);

router.get("/user", authUser, getUserOrders);
router.get("/seller", authSeller, getAllOrders);

export default router;
