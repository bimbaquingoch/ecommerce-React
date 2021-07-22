import { useState } from "react";
import { FiltroCategoria } from "./FiltoCategoria";
import ProductItem from "./ProductItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/index.css";
import "animate.css";

export const Home = () => {
  const [filtro, setFiltro] = useState(["men's clothing"]);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        centerMode
        swipeable
        stopOnHover
      >
        <div className="carousel">
          <img
            src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750"
            alt="ropa"
          />
        </div>

        <div className="carousel">
          <img
            src="https://images.pexels.com/photos/6069083/pexels-photo-6069083.jpeg"
            alt="ropa"
          />
        </div>

        <div className="carousel">
          <img
            src="https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="ropa"
          />
        </div>
      </Carousel>
      <main>
        <section className="btn-categorias">
          <FiltroCategoria setFiltro={setFiltro} />
        </section>
        <section className="cards-products">
          {filtro.map((elmnt) => (
            <ProductItem key={elmnt} filtro={filtro} />
          ))}
        </section>
      </main>
    </>
  );
};
