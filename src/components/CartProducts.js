import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { ProductLoading } from "./ProductLoading";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const CartProducts = ({ filtro }) => {
  const { data: products, loading } = useFetchData(filtro);
  return (
    <>
      {loading ? (
        <ProductLoading />
      ) : (
        products.map((item) => (
          <section
            className="card-content animate__animated animate__flipInY"
            key={item.id}
          >
            <CardHeader
              className="card-content__header"
              title={item.titulo}
              aria-label={item.titulo}
            />
            <img
              className="card-content__img"
              src={item.img}
              alt={item.titulo}
            />
            <CardActions className="card-content__icons" disableSpacing>
              <IconButton aria-label="add to cart">
                <DeleteIcon fontSize="large" color="secondary" />
              </IconButton>
              <h2 className="card-content__precio">{`$${item.precio}`}</h2>
            </CardActions>
          </section>
        ))
      )}
    </>
  );
};
