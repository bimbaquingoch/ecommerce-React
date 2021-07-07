import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import accounting from "accounting";

export const CartProducts = ({ product }) => {
  const products = [product];
  return (
    <>
      {products.map((item) => (
        <section
          className="card-content animate__animated animate__flipInY"
          key={item.id}
        >
          <CardHeader
            className="card-content__header"
            title={item.titulo}
            aria-label={item.titulo}
          />
          <img className="card-content__img" src={item.img} alt={item.titulo} />
          <CardActions className="card-content__icons" disableSpacing>
            <IconButton aria-label="add to cart">
              <DeleteIcon fontSize="large" color="secondary" />
            </IconButton>
            <h2 className="card-content__precio">
              {accounting.formatMoney(item.precio)}
            </h2>
          </CardActions>
        </section>
      ))}
    </>
  );
};
