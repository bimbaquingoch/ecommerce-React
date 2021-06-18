import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const ProductItem = ({ titulo, img, descripcion, precio }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="card-content">
      <CardHeader className="card-content__header" title={titulo} />
      <div>
        <img className="card-content__img" src={img} alt={titulo} />
      </div>
      <div>
        <h2 className="card-content__precio">{`$ ${precio}`}</h2>
      </div>
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
          <p>{descripcion}</p>
        </div>
      </Collapse>
    </section>
  );
};

export default ProductItem;
