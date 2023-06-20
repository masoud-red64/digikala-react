import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./contexts/authContext";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [allCartProducts, setAllCartProducts] = useState([]);
  const router = useRoutes(routes);

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    let userToken = JSON.parse(localStorage.getItem("user"));
    if (userToken) {
      await fetch(`https://my-digikala.iran.liara.run/api/users`)
        .then((res) => res.json())
        .then((users) => {
          let mainUser = users.filter((user) => user.token === userToken.token);
          setUserInfo(mainUser[0]);
          setIsLogin(true);
        });
    } else {
      setIsLogin(false);
    }
  }

  function addProductToCart(productID) {
    let newProduct = {
      userID: userInfo.id,
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
        console.log(result);
        getAllCartProducts();
      });
  }

  const getAllCartProducts = () => {
    fetch("https://my-digikala.iran.liara.run/api/cart")
      .then((res) => res.json())
      .then((cartProducts) => {
        let mainCartProducts = cartProducts.filter(
          (cartProduct) => cartProduct.userID === userInfo.id
        );
        setAllCartProducts(mainCartProducts);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        isLogin,
        getUserInfo,
        addProductToCart,
        allCartProducts,
        getAllCartProducts,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
