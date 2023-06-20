import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Cart.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NotEmptyCart from "../../Components/CartPage/NotEmptyCart/NotEmptyCart";
import EmptyCart from "../../Components/CartPage/EmptyCart/EmptyCart";
import EmptyNextCart from "../../Components/CartPage/EmptyNextCart/EmptyNextCart";
import NotEmptyNextCart from "../../Components/CartPage/NotEmptyNextCart/NotEmptyNextCart";
import AuthContext from "../../contexts/authContext";
import { enToPersianNumber } from "../../func/utils";

export default function Cart() {
  const [isShowNotEmptyCart, setIsShowNotEmptyCart] = useState(false);
  const [isShowNotEmptyNextCart, setIsShowNotEmptyNextCart] = useState(false);
  const [isShowEmptyCart, setIsShowEmptyCart] = useState(true);
  const [isShowEmptyNextCart, setIsShowEmptyNextCart] = useState(false);
  const [navbarTitle, setNavbarTitle] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [nextCartProducts, setNextCartProducts] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [sumDiscount, setSumDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    getAllNextCartProducts();
    getAllCartProducts();
    setNavbarTitle("cart");
  }, [authContext.userInfo]);

  const getAllCartProducts = useCallback(() => {
    fetch("https://my-digikala.iran.liara.run/api/cart")
      .then((res) => res.json())
      .then((cartProducts) => {
        console.log(authContext.userInfo.id);
        let mainCartProducts = cartProducts.filter(
          (cartProduct) => cartProduct.userID === authContext.userInfo.id
        );
        console.log(mainCartProducts);
        if (mainCartProducts.length) {
          setCartProducts([]);
          setIsShowEmptyCart(false);
          setIsShowNotEmptyCart(true);
          setIsShowEmptyNextCart(false);
          setIsShowNotEmptyNextCart(false);
          mainCartProducts.forEach((mainCartProduct) => {
            fetch(
              `https://my-digikala.iran.liara.run/api/products/cart/${mainCartProduct.productID}`
            )
              .then((res) => res.json())
              .then((product) => {
                setCartProducts((prev) => [...prev, product[0]]);
              });
          });
        } else {
          setCartProducts([]);
          setIsShowEmptyCart(true);
          setIsShowNotEmptyCart(false);
          setIsShowEmptyNextCart(false);
          setIsShowNotEmptyNextCart(false);
        }
      });
  }, [authContext]);

  const getAllNextCartProducts = useCallback(() => {
    fetch("https://my-digikala.iran.liara.run/api/nextCart")
      .then((res) => res.json())
      .then((cartProducts) => {
        console.log(authContext.userInfo.id);
        let mainNextCartProducts = cartProducts.filter(
          (cartProduct) => cartProduct.userID === authContext.userInfo.id
        );
        console.log(mainNextCartProducts);
        if (mainNextCartProducts.length) {
          setNextCartProducts([]);
          setIsShowEmptyNextCart(false);
          setIsShowNotEmptyNextCart(true);
          setIsShowEmptyCart(false);
          setIsShowNotEmptyCart(false);
          mainNextCartProducts.forEach((mainCartProduct) => {
            fetch(
              `https://my-digikala.iran.liara.run/api/products/cart/${mainCartProduct.productID}`
            )
              .then((res) => res.json())
              .then((product) => {
                setNextCartProducts((prev) => [...prev, product[0]]);
              });
          });
        } else {
          setIsShowEmptyNextCart(true);
          setIsShowNotEmptyCart(false);
          setIsShowEmptyCart(false);
          setIsShowNotEmptyCart(false);
          setNextCartProducts([]);
        }
      });
  }, [authContext]);

  function removeCartProduct(productID) {
    fetch(`https://my-digikala.iran.liara.run/api/cart/remove/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setSumPrice(0);
        setSumDiscount(0);
        setTotalPrice(0);
        getAllCartProducts();
      });
  }

  async function moveProductToNextCart(productID) {
    let userID = await authContext.userInfo.id;

    let newProduct = {
      userID,
      productID,
    };

    fetch("https://my-digikala.iran.liara.run/api/nextCart/new-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        fetch(
          `https://my-digikala.iran.liara.run/api/cart/remove/${productID}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            getAllNextCartProducts();
            getAllCartProducts();
            setSumPrice(0);
            setSumDiscount(0);
            setTotalPrice(0);
          });
      });
  }

  function removeNextCartProduct(productID) {
    fetch(
      `https://my-digikala.iran.liara.run/api/nextCart/remove/${productID}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        getAllNextCartProducts();
      });
  }

  async function moveProductToCart(productID) {
    let userID = await authContext.userInfo.id;

    let newProduct = {
      userID,
      productID,
    };

    fetch("https://my-digikala.iran.liara.run/api/cart/new-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        fetch(
          `https://my-digikala.iran.liara.run/api/nextCart/remove/${productID}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            getAllCartProducts();
            getAllNextCartProducts();
            setSumPrice(0);
            setSumDiscount(0);
            setTotalPrice(0);
          });
      });
  }

  function moveAllProductsFromNextCartToCart() {
    fetch("https://my-digikala.iran.liara.run/api/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        fetch("https://my-digikala.iran.liara.run/api/nextCart/remove", {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            getAllCartProducts();
            getAllNextCartProducts();
            setSumPrice(0);
            setSumDiscount(0);
            setTotalPrice(0);
          });
      });
  }

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
                  cartProducts.length
                    ? setIsShowNotEmptyCart(true)
                    : setIsShowEmptyCart(true);
                  setIsShowEmptyNextCart(false);
                  setIsShowNotEmptyNextCart(false);
                  setSumPrice(0);
                  setSumDiscount(0);
                  setTotalPrice(0);
                }}
              >
                سبد خرید
                <span className="cart-navbar__item-cart-count">
                  {enToPersianNumber(cartProducts.length)}
                </span>
              </li>
              <li
                className={`cart-navbar__item ${
                  navbarTitle === "next-cart" ? "cart-navbar__item--active" : ""
                }`}
                onClick={() => {
                  setNavbarTitle("next-cart");
                  nextCartProducts.length
                    ? setIsShowNotEmptyNextCart(true)
                    : setIsShowEmptyNextCart(true);
                  setIsShowNotEmptyCart(false);
                  setIsShowEmptyCart(false);
                  setSumPrice(0);
                  setSumDiscount(0);
                  setTotalPrice(0);
                }}
              >
                خرید بعدی
                <span className="cart-navbar__item-next-cart-count">
                  {enToPersianNumber(nextCartProducts.length)}
                </span>
              </li>
            </ul>
          </div>
          {isShowNotEmptyCart && (
            <NotEmptyCart
              products={cartProducts}
              removeCartProduct={removeCartProduct}
              sumPrice={sumPrice}
              setSumPrice={setSumPrice}
              sumDiscount={sumDiscount}
              setSumDiscount={setSumDiscount}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              moveProductToNextCart={moveProductToNextCart}
            />
          )}
          {isShowEmptyCart && <EmptyCart />}
          {isShowNotEmptyNextCart && (
            <NotEmptyNextCart
              products={nextCartProducts}
              removeNextCartProduct={removeNextCartProduct}
              moveProductToCart={moveProductToCart}
              moveAllProductsFromNextCartToCart={
                moveAllProductsFromNextCartToCart
              }
            />
          )}
          {isShowEmptyNextCart && <EmptyNextCart />}
        </div>
      </div>

      <Footer />
    </>
  );
}
