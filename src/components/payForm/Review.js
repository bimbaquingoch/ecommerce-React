import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const Review = () => {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket?.map((prod) => {
          return (
            <ListItem key={prod.titulo}>
              <ListItemText primary={prod.titulo} secondary={`Qty: ${1}`} />
              <Typography>{accounting.formatMoney(prod.precio)}</Typography>
            </ListItem>
          );
        })}
        <ListItem>
          <ListItemText primary="Total"></ListItemText>
          <Typography variant="subtitle1">
            {accounting.formatMoney(getBasketTotal(basket))}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Review;
