import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Cart.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NotEmptyCart from "../../Components/CartPage/NotEmptyCart/NotEmptyCart";
import EmptyCart from "../../Components/CartPage/EmptyCart/EmptyCart";
import EmptyNextCart from "../../Components/CartPage/EmptyNextCart/EmptyNextCart";
import NotEmptyNextCart from "../../Components/CartPage/NotEmptyNextCart/NotEmptyNextCart";
import AuthContext from "../../contexts/authContext";
import _ from "lodash";

export default function Cart() {
  const [isShowNotEmptyCart, setIsShowNotEmptyCart] = useState(false);
  const [isShowNotEmptyNextCart, setIsShowNotEmptyNextCart] = useState(false);
  const [isShowEmptyCart, setIsShowEmptyCart] = useState(true);
  const [isShowEmptyNextCart, setIsShowEmptyNextCart] = useState(false);
  const [navbarTitle, setNavbarTitle] = useState("cart");
  const [cartProducts, setCartProducts] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [sumDiscount, setSumDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    getAllCartProducts();
  }, [authContext]);

  const getAllCartProducts = useCallback(() => {
    fetch("http://localhost:3000/api/cart")
      .then((res) => res.json())
      .then((cartProducts) => {
        console.log(authContext.userInfo.id);
        let mainCartProducts = cartProducts.filter(
          (cartProduct) => cartProduct.userID === authContext.userInfo.id
        );
        console.log(mainCartProducts);
        if (mainCartProducts.length) {
          setCartProducts([]);
          setSumPrice(0);
          setSumDiscount(0);
          setTotalPrice(0);
          setIsShowEmptyCart(false);
          setIsShowNotEmptyCart(true);
          mainCartProducts.forEach((mainCartProduct) => {
            fetch(
              `http://localhost:3000/api/products/cart/${mainCartProduct.productID}`
            )
              .then((res) => res.json())
              .then((product) => {
                setCartProducts((prev) => [...prev, product[0]]);
                setSumPrice((prev) => (prev += product[0].price));
                setSumDiscount(
                  (prev) => (prev += (product[0].price * product[0].off) / 100)
                );
                setTotalPrice(
                  (prev) =>
                    (prev +=
                      product[0].price -
                      (product[0].price * product[0].off) / 100)
                );
              });
          });
        } else {
          setIsShowEmptyCart(true);
          setIsShowNotEmptyCart(false);
        }
      });
  }, [authContext]);

  return (
    <>
      <Header />

      <div className="main">
        <div className="container">
          <div className="cart-navbar">
            <ul className="cart-navbar__list">
              <li
                className={`cart-navbar__item ${
                  navbarTitle === "cart" ? "cart-navbar__item--active" : ""
                }`}
                onClick={() => {
                  setNavbarTitle("cart");
                  setIsShowEmptyCart(true);
                  setIsShowEmptyNextCart(false);
                }}
              >
                سبد خرید
                <span className="cart-navbar__item-cart-count">۱</span>
              </li>
              <li
                className={`cart-navbar__item ${
                  navbarTitle === "next-cart" ? "cart-navbar__item--active" : ""
                }`}
                onClick={() => {
                  setNavbarTitle("next-cart");
                  setIsShowEmptyCart(false);
                  setIsShowEmptyNextCart(true);
                }}
              >
                خرید بعدی
                <span className="cart-navbar__item-next-cart-count">۱</span>
              </li>
            </ul>
          </div>
          {isShowNotEmptyCart && <NotEmptyCart products={cartProducts} sumPrice={sumPrice} sumDiscount={sumDiscount} totalPrice={totalPrice}/>}
          {isShowEmptyCart && <EmptyCart />}
          {isShowNotEmptyNextCart && <NotEmptyNextCart />}
          {isShowEmptyNextCart && <EmptyNextCart />}
        </div>
      </div>

      <Footer />
    </>
  );
}
