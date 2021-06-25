export const getProducts = async (filtro, texto) => {
  // petición http al API
  const url = "https://fakestoreapi.com/products/";
  const resp = await fetch(url);
  // transformamos la información a formato JSON
  const data = await resp.json();
  // extraemos los datos por medio de desestruccturación
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
  // console.log(texto[0]);

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
