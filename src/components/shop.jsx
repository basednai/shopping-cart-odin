import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./productCard";
import styles from "../assets/styles/shopPage.module.css";
// import styles2 from "/src/assets/styles/scroll.module.css";

import { Cart } from "./cart";
import { addToCart, removeFromCart } from "../helpers/cartFuncs";

const useFetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(products);

  return { products, error, loading };
};

export const Shop = () => {
  const { products, error, loading } = useFetchProducts();
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);


  const showCartFunc = () => {
    setShowCart(!showCart);
  };

  if (error) return <>error fetching data!</>;
  if (loading)
    return (
      <div className={styles.centerGrid}>
        <img
          src="/loader.svg"
          alt="loading"
          className={styles.spinner}
        />
      </div>
    );

  return (
    <>
      <div className={styles.scroll}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <button onClick={showCartFunc} className={styles.linkButton}>
            {showCart ? "Shop" : "Cart"}

          </button>
        </nav>
        {!showCart && (
          <div className={styles.productGrid}>
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  url={product.image}
                  addToCart={(e) => addToCart(e, products, cart, setCart)}
                />
              ))}
          </div>
        )}
      </div>

      {showCart ? (
        cart.length != 0 ? (
          <div className={styles.centerGrid}>
              <Cart
                cart={cart}
                removeBtn={(e) => removeFromCart(e, products, cart, setCart)}
              />
          </div>
        ) : (
          <div className={styles.centerGrid}>
            <p>cart is empty</p>
          </div>
        )
      ) : null}
    </>
  );
};
