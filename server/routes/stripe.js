
// import express from "express";
// import Stripe from "stripe";
// import dotenv from "dotenv";

// const stripe=Stripe(process.env.STRIPE_KEY);
// const router=express.Router();
// dotenv.config();

// router.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.CLIENT_URL}/checkout-success`,
//       cancel_url: `${process.env.CLIENT_URL}/cart`,
//     });
  
//     res.redirect({url:session.url});
//   });

// export default router;