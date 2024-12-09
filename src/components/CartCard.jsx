import styles from "../assets/styles/productCard.module.css";
import PropTypes from "prop-types";

export const CartCard = ({ id, title, price, url, qty, click }) => {
  return (
    <div className={styles.cartCard}>
      <img src={url} alt={title} />
      <div className="itemInfo">
        <div>{title}</div>
        <div>price: {price}</div>
        <div>qty: {qty}</div>
        <button onClick={click} data-id={id}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  click: PropTypes.func,
  qty: PropTypes.number,
};
