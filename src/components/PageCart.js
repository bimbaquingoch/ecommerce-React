import { CartProducts } from "./CartProducts";
import { TotalCart } from "./TotalCart";
import { useStateValue } from "../StateProvider";
import { CartVacio } from "./CartVacio";
import "../styles/pagecart.css";

export const PageCart = () => {
  // llamamos a los elementos que deben
  // mostrarse en el carrito
  const [{ basket }] = useStateValue();
  return (
    <>
      {basket.length === 0 ? (
        <CartVacio />
      ) : (
        <main>
          <section className="title-pagecart">
            <h1 className="animate__fadeInUp">Shopping Cart</h1>
            <TotalCart basket={basket} />
          </section>
          <section className="cards-products">
            {basket?.map((product) => {
              return <CartProducts key={product.id} product={product} />;
            })}
          </section>
        </main>
      )}
    </>
  );
};
