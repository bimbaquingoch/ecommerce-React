export const getProducts = async () => {
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
  return items;
};
