import React from "react";
import { AppRouter } from "./routers/AppRouter";

// este archivo es la aplicaion entera,
// se exporta y se utiliza solo en el index.js
const Ecommerce = () => {
  // const [texto, setTexto] = useState(["en"]);
  return (
    <>
      <AppRouter />
    </>
  );
};

export default Ecommerce;
