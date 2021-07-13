import { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import Stepeer from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { StepLabel } from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import useStyles from "./styles";
import Confirmation from "./Confirmation";
import { useStateValue } from "../../StateProvider";

export const Checkout = () => {
  const [{ paymentMessage }] = useStateValue();

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];

  const nextStep = () => setActiveStep((prevstep) => prevstep + 1);
  const backStep = () => setActiveStep((prevstep) => prevstep - 1);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm nextStep={nextStep} />
    ) : (
      <PaymentForm nextStep={nextStep} backStep={backStep} />
    );

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" alingn="center">
            Checkout
          </Typography>
          <Stepeer activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepeer>
          {activeStep === steps.length ? (
            <Confirmation message={paymentMessage} />
          ) : (
            <Form />
          )}
        </Paper>
      </main>
    </>
  );
};
