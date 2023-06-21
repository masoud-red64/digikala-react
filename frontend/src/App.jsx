import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./contexts/authContext";
import Loading from "./Components/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRoutes(routes);

  useEffect(() => {
    getUserInfo();
    setIsLoading(false);
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
    setIsLoading(true);
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
        toast.success("محصول مورد نظر با موفقیت به سبد خرید اضافه شد😎");
        getAllCartProducts();
      })
      .finally(() => {
        setIsLoading(false);
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
      <ToastContainer />
      {isLoading && <Loading />}
    </AuthContext.Provider>
  );
}

export default App;
