import { Typography, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Confirmation = ({ message }) => {
  return (
    <>
      <Typography variant="h6">{message}</Typography>
      <Divider />
      <Typography variant="subtitle2" gutterBottom>
        {message === "Successfull Payment"
          ? "Your booking reference: Rgh342udfy34"
          : `${swal({
              title: "Someting was wrong, try it later!",
              icon: "warning",
              timer: "1800",
            })}`}
      </Typography>
      <Button
        component={Link}
        to="/ecommerce-React/"
        variant="contained"
        color="primary"
      >
        Back to Home
      </Button>
    </>
  );
};

export default Confirmation;
