import React from "react";
import { Typography, Grid, Button } from "@material-ui/core/";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import AddressInput from "./AddressInput";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const AddressForm = ({ nextStep }) => {
  const methods = useForm();
  const [, dispatch] = useStateValue();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          action=""
          onSubmit={methods.handleSubmit((data) => {
            dispatch({
              type: actionTypes.SET_SHIPPING_DATA,
              shippingData: data,
            });
            nextStep();
          })}
        >
          <Grid container spacing={3}>
            <AddressInput
              required
              name="firstName"
              label="First Name"
              type="text"
            />
            <AddressInput
              required
              name="lastName"
              label="Last Name"
              type="text"
            />
            <AddressInput
              required
              name="address1"
              label="Address"
              type="text"
            />
            <AddressInput required name="email" label="email" type="email" />
            <AddressInput required name="city" label="City" type="text" />
            <AddressInput
              required
              name="postCode"
              label="Post Code"
              type="number"
            />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Button
              component={Link}
              to="/ecommerce-React/paycart"
              variant="contained"
              color="primary"
            >
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
