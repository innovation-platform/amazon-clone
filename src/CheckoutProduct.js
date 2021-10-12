import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
          <small>/-</small>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🧡</p>
            ))}
        </p>
      </div>
      <button onClick={removeFromBasket}>Remove from Cart</button>
    </div>
  );
}

export default CheckoutProduct;
