export const getProducts = async (filtro) => {
  const url = `https://fakestoreapi.com/products/`;
  const resp = await fetch(url);
  const data = await resp.json();
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
  if (filtro) {
    return items.filter((cat) => cat.categoria === filtro[0]);
  }
};
