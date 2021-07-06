import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../styles/productItem.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from "@material-ui/core/Typography";
import { useFetchData } from "../hooks/useFetchData";
import { ProductLoading } from "./ProductLoading";
import accounting from "accounting";
// import reducer, { actionTypes, initialState } from "../reducer";
// import { useStateValue } from "../ProveedorEstado";

const useStyles = makeStyles((theme) => ({
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

const ProductItem = ({ filtro, texto }) => {
  const { data: products, loading } = useFetchData(filtro, texto);

  // estilos del mostrar mas
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [{ cart }, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCart = (id, titulo, img, precio) => {
    // dispatch({
    //   type: actionTypes.ADD_TO_CART,
    //   item: {
    //     id: id,
    //     name: titulo,
    //     img: img,
    //     precio: precio,
    //   },
    // });
    console.log(id, titulo, img, precio);
  };

  return (
    <>
      {loading ? (
        <ProductLoading />
      ) : (
        products.map(({ id, titulo, img, precio, desc }) => (
          <section
            className="card-content animate__animated animate__flipInY"
            key={id}
          >
            <CardHeader
              className="card-content__header"
              title={titulo}
              aria-label={titulo}
            />
            <img className="card-content__img" src={img} alt={titulo} />
            <h2 className="card-content__precio">
              {accounting.formatMoney(precio)}
            </h2>
            <CardActions className="card-content__icons" disableSpacing>
              {/* icon cart*/}
              <IconButton
                className={classes.expand}
                aria-label="add to cart"
                onClick={() => addToCart(id, titulo, img, precio)}
              >
                <AddShoppingCartIcon fontSize="large" color="primary" />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon fontSize="large" color="primary" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <div className="card-content__descripcion">
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
