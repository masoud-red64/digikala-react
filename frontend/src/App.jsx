import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./contexts/authContext";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const router = useRoutes(routes);

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    let userToken = JSON.parse(localStorage.getItem("user"));
    if (userToken) {
      await fetch(`http://localhost:3000/api/users`)
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

  return (
    <AuthContext.Provider value={{ userInfo, isLogin,getUserInfo }}>
      {router}
    </AuthContext.Provider>
  );
}

export default App;
