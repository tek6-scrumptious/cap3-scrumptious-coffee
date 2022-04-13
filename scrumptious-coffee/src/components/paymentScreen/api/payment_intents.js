// SERVERSIDE CODE
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

// export default async (req, res) => {
//     console.log(req);
//     if (req.method === "POST") {
//         try {
//             const { amount } = req.body;

//             const paymentIntent = await stripe.paymentIntents.create({
//                 amount,
//                 currency: "usd"
//             });

//             res.status(200).send(paymentIntent.client_secret);
//         } catch (err) {
//             res.status(500).json({ statusCode: 500, message: err.message });
//         }
//     } else {
//         res.setHeader("Allow", "POST");
//         res.status(405).end("Method Not Allowed");
//     }
// };

// 4242 4242 4242 4242