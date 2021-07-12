import Review from "./Review";
import { Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Typography, Button } from "@material-ui/core/";
import { actionTypes, getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import accounting from "accounting";
import { Link } from "react-router-dom";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51JC8T2LZD2LLfhkI8T8VfBFjVNnNKXVagA6bY1Xoce5biOTWpXTJpW3WpB4ImmSwsXn5DSyUMYkUyyilD6xFKh2T00Lx9CX22A"
);

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240,57,122)",
      color: "#333",
      fontSize: "1.1em",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ nextStep }) => {
  const [{ basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            id,
            amount: getBasketTotal(basket) * 100,
          }
        );
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message,
        });
        if (data.message === "Successfull Payment") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          });
        }
        elements?.getElement(CardElement).clear();
        nextStep();
      } catch (err) {
        console.log(err);
        nextStep();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/ecommerce-React/paypage"
        >
          Back
        </Button>
        <Button type="submit" variant="outlined" color="primary">
          Pay {accounting.formatMoney(getBasketTotal(basket))}
        </Button>
      </div>
    </form>
  );
};

const PaymentForm = ({ backStep, nextStep }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h5" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
      </Elements>
    </>
  );
};

export default PaymentForm;
