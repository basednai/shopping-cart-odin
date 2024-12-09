import styles from "../assets/styles/productCard.module.css";
import PropTypes from "prop-types";
export const ProductCard = ({ id, title, price, url, addToCart }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt={title} />
      <div>{title}</div>
      <div>{price}</div>
      <button onClick={addToCart} data-id={id}>
        Add To Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  addToCart: PropTypes.func,
};
