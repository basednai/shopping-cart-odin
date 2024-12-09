import PropTypes from "prop-types";
import { CartCard } from "./CartCard";

export const Cart = ({ cart, removeBtn }) => {
  console.log(cart);

  if (!cart) return "error loading cart! ";

  return (
    <>
      <ul>
        {cart &&
          cart.map((item) => (
            <CartCard
              key={item.item.id}
              id={item.item.id}
              title={item.item.title}
              price={item.item.price}
                  url={item.item.image}
                  click={removeBtn}
                  qty={item.qty}
            />
          ))}
      </ul>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  removeBtn: PropTypes.func,
};
