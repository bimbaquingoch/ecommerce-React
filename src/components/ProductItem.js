import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getProducts } from "../helpers/getProducts";

const useStyles = makeStyles((theme) => ({
  expand: {
    backgroundColor: "#00a2f1",
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

const ProductItem = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts().then((items) => {
      setProductos(items);
    });
  }, []);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {productos.map((item) => (
        <div className="card-content" key={item.id}>
          <CardHeader className="card-content__header" title={item.titulo} />
          <img className="card-content__img" src={item.img} alt={item.titulo} />
          <h2 className="card-content__precio">{`$ ${item.precio}`}</h2>
          <CardActions>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className="card-content__descripcion">
              <h3>Descripcion:</h3>
              <p>{item.desc}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
