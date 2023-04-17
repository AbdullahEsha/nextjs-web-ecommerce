import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { cartActions } from "../store/cartSlice";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const removeProductHandler = () => {
    dispatch(cartActions.removeItem(data));
  };
  const decreaseHandler = () => {
    dispatch(cartActions.decreaseItem(data));
  };

  const Products = useSelector((state) => state?.products.allProducts) || {};
  const [singleProduct] = Products.data.filter((el) => el.name === data.name);
  console.log(singleProduct);

  const increaseHandler = () => {
    // console.log(data.quantity);
    if (singleProduct.quantity > data.quantity)
      dispatch(cartActions.increaseItem(data));
  };

  return (
    <div>
      <div className="item">
        <img src={data.image} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <span>${data.price}</span>
          <div className="increment-decrement-card">
            <button onClick={decreaseHandler}>-</button>
            <input value={data.quantity} />
            <button
              className={`${
                singleProduct.quantity > data.quantity ? "" : "not-allowed"
              }`}
              onClick={increaseHandler}
            >
              +
            </button>
          </div>
          <p>Total: ${(data.price * data.quantity).toFixed(2)}</p>
        </div>
        <button className="remove-btn" onClick={removeProductHandler}>
          Remove ❌
        </button>
      </div>
      <hr />
    </div>
  );
};

const Cart = () => {
  const item = useSelector((state) => state.cart);

  const totalAmount = item.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <h1
          style={{
            // paddingTop: "20vh",
            fontSize: "36px",
            marginBottom: "4rem",
            fontWeight: "500",
          }}
        >
          Shopping Cart
        </h1>
        <hr style={{ color: "#D1D5DB" }} />
        {item.cart.length < 1 ? (
          <div className="empty-box center">
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginTop: "1.25rem",
                  textAlign: "center",
                }}
              >
                Your Cart is empty
              </h3>
              <div className="center">
                <button className="viewAll-btn">
                  <Link href="/shop">Visit All Products</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="items">
            <div>
              {item.cart.map((el, i) => (
                <Item key={i} data={el} />
              ))}
            </div>
            <div className="checkout">
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
              <div>
                <Link href="/payment">
                  <button className="btn btn-checkout">checkout</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
