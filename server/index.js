const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

const stripe = new Stripe(
  "sk_test_51JC8T2LZD2LLfhkIQ2ZOPmbkyraSCULSpaH6wrjrfSmKgNyYh1JA8W0tQSPNkuoSaZtphWXIvM9R3i5vLKLjasv600lkgPsluL"
);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "productos",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    return res.status(200).json({ message: "Successfull Payment" });
  } catch (err) {
    return res.json({ message: err.raw.message });
  }
});

app.listen(3001, () => {
  console.log("server iniciado en el puerto 3001");
});
