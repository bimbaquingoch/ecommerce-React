import React, { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from "@material-ui/core/Typography";
import { useFetchData } from "../hooks/useFetchData";
import { ProductLoading } from "./ProductLoading";
import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import swal from "sweetalert";
import { makeStyles } from "@material-ui/core/styles";

import "../styles/productItem.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProductItem = ({ filtro }) => {
  const classes = useStyles();
  // rederizado de los productos del API
  const { data: products, loading } = useFetchData(filtro);

  // estilos del mostrar mas
  const [expandedId, setExpandedId] = useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  // guardamos los elementos que se van al carrito
  const [, dispatch] = useStateValue();
  const addToBasket = (id, titulo, img, precio) => {
    swal({
      title: "Add to cart",
      text: "Are you sure add to cart?",
      icon: "info",
      buttons: ["NO", "YES"],
    }).then((resp) => {
      if (resp) {
        dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
            id,
            titulo,
            img,
            precio,
          },
        });
        swal({
          title: "Added",
          text: "Product added successfully",
          icon: "success",
          timer: "2000",
        });
      }
    });
  };

  // aqui se renderizan los productos del API
  // si esta en loading, entonces va a mostrar
  // el componente ProductLoading
  // cuando deje de cargar mostrara los productos
  return (
    <>
      {loading ? (
        <ProductLoading />
      ) : (
        products.map(({ id, titulo, img, precio, desc }, index) => (
          <section
            className="card card-content animate__animated animate__flipInY"
            key={id}
          >
            <CardHeader
              className="card-title card-content__header"
              title={titulo}
              aria-label={titulo}
            />
            <img
              className="card-img-top card-content__img"
              src={img}
              alt={titulo}
            />
            <CardContent>
              <Typography variant="h4">
                {accounting.formatMoney(precio)}
              </Typography>
            </CardContent>
            <CardActions className="card-content__icons" disableSpacing>
              {/* icon cart*/}
              <IconButton
                className={"btn btn-outline-primary"}
                aria-label="add to cart"
                onClick={() => {
                  addToBasket(id, titulo, img, precio);
                }}
              >
                <AddShoppingCartIcon fontSize="large" color="primary" />
              </IconButton>
              {/* icon expand*/}
              <IconButton
                className={
                  ("btn btn-outline-primary",
                  clsx(classes.expand, {
                    [classes.expandOpen]: expandedId,
                  }))
                }
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedId === index}
                aria-label="show more"
              >
                <ExpandMoreIcon fontSize="large" color="primary" />
              </IconButton>
            </CardActions>
            <Collapse
              style={{ position: "relative" }}
              in={expandedId === index}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Description:
                </Typography>
                <Typography paragraph>{desc}</Typography>
              </CardContent>
            </Collapse>
          </section>
        ))
      )}
    </>
  );
};

export default ProductItem;
