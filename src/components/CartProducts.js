import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import accounting from "accounting";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import swal from "sweetalert";

export const CartProducts = ({ product }) => {
  const products = [product];
  const [, dispatch] = useStateValue();

  const removeItem = (id) => {
    swal({
      title: "Delete",
      text: "Do you want delete this product?",
      icon: "warning",
      buttons: ["NO", "YES"],
    }).then((resp) => {
      if (resp) {
        dispatch({ type: actionTypes.REMOVE_ITEM, id: id });
        swal({
          title: "Deleted",
          text: "Product deleted successfully",
          icon: "success",
          timer: "2000",
        });
      }
    });
  };
  return (
    <>
      {products.map(({ id, titulo, img, precio }) => (
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
          <CardActions className="card-content__icons" disableSpacing>
            {/*eslint-disable-next-line jsx-a11y/no-access-key*/}
            <IconButton
              className="delbtn"
              accessKey="q"
              title="(Alt+Q)=Delete item"
              aria-label="remove item"
              onClick={() => removeItem(id)}
            >
              <DeleteIcon fontSize="large" color="secondary" />
            </IconButton>
            <h2 className="card-content__precio">
              {accounting.formatMoney(precio)}
            </h2>
          </CardActions>
        </section>
      ))}
    </>
  );
};
