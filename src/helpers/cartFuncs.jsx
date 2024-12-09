export const addToCart = (e, products, cart, setCart) => {
  console.log(e.target.getAttribute("data-id"));
  const id = e.target.getAttribute("data-id");
  let found = false;
  const newCart = cart.map((item) => {
    if (item.item === products[id - 1]) {
      found = true;
      return { ...item, qty: item.qty + 1 };
    } else {
      return item;
    }
  });

  found
    ? setCart(newCart)
    : setCart([...cart, { item: products[id - 1], qty: 1 }]);
};

export const removeFromCart = (e,products, cart, setCart) => {
  console.log(e.target.getAttribute("data-id"));
  const id = e.target.getAttribute("data-id");
  console.log(id, products[id]);

  const newCart = cart
    .map((item) => {
      if (item.item === products[id - 1]) {
        return { ...item, qty: item.qty - 1 };
      } else {
        return item;
      }
    })
    .filter((item) => item.qty != 0);

  setCart(newCart);
};
