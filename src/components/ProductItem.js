import React, { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
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
import "../styles/productItem.css";

const ProductItem = ({ filtro }) => {
  // rederizado de los productos del API
  const { data: products, loading } = useFetchData(filtro);

  // estilos del mostrar mas
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // guardamos los elementos que se van al carrito
  const [, dispatch] = useStateValue();
  const addToBasket = (id, titulo, img, precio) => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        titulo,
        img,
        precio,
      },
    });
    alert("added to cart");
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
        products.map(({ id, titulo, img, precio, desc }) => (
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
            <h2 className="card-content__precio">
              {accounting.formatMoney(precio)}
            </h2>
            <CardActions className="card-content__icons" disableSpacing>
              {/* icon cart*/}
              <IconButton
                aria-label="add to cart"
                onClick={() => {
                  addToBasket(id, titulo, img, precio);
                }}
              >
                <AddShoppingCartIcon fontSize="large" color="primary" />
              </IconButton>
              <IconButton
                className={"btn btn-outline-primary"}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon fontSize="large" color="primary" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <div className="card-text card-content__descripcion">
                <h3>Description:</h3>
                <Typography paragraph>{desc}</Typography>
              </div>
            </Collapse>
          </section>
        ))
      )}
    </>
  );
};

export default ProductItem;
