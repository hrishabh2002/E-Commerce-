import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe=Stripe(process.env.STRIPE_KEY);

const stripes=async (req, res) => {
   
    const finalPrice=req.body.item
   
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'Cart Items',
          },
          unit_amount: finalPrice*100,
        },
        quantity:1
      }
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url:session.url});
}

export default stripes;