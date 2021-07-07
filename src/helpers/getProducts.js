export const getProducts = async (filtro) => {
  // petición http al API
  const url = "https://fakestoreapi.com/products/";
  const resp = await fetch(url);
  // transformamos la información a formato JSON
  const data = await resp.json();
  // extraemos los datos del elemento (e)
  const items = data.map((e) => {
    return {
      categoria: e.category,
      desc: e.description,
      id: e.id,
      img: e.image,
      precio: e.price,
      titulo: e.title,
    };
  });

  // filtro para categoría hombre y mujer
  if (filtro[0] === "Men's") {
    filtro = ["men's clothing"];
    return items.filter((cat) => cat.categoria === filtro[0]);
  } else if (filtro[0] === "Women's") {
    filtro = ["women's clothing"];
    return items.filter((cat) => cat.categoria === filtro[0]);
  } else {
    // si es diferente devulve esto
    return items.filter((cat) => cat.categoria === filtro[0]);
  }
};
