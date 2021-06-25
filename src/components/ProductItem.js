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

const useStyles = makeStyles((theme) => ({
  expand: {
    backgroundColor: "#0fa2c1",
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {loading ? (
        <ProductLoading />
      ) : (
        products.map((item) => (
          <div
            className="card-content animate__animated animate__fadeInUp"
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
            <h2 className="card-content__precio">{`$ ${item.precio}`}</h2>
            <CardActions className="card-content__icons" disableSpacing>
              {/* icon cart*/}
              <IconButton className={classes.expand} aria-label="add to cart">
                <AddShoppingCartIcon fontSize="large" />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <div className="card-content__descripcion">
                <h3>Description:</h3>
                <Typography paragraph>{item.desc}</Typography>
              </div>
            </Collapse>
          </div>
        ))
      )}
    </>
  );
};

export default ProductItem;
