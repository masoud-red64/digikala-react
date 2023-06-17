import Index from "./Pages/Index/Index";
import Main from "./Pages/Main/Main";
import CategoryInfo from "./Pages/CategoryInfo/CategoryInfo";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";

const routes = [
  { path: "/", element: <Index /> },
  { path: "main/:shortName", element: <Main /> },
  { path: "category-info/:shortName/:mainID", element: <CategoryInfo /> },
  { path: "login", element: <Login /> },
  { path: "cart", element: <Cart /> },
  { path: "product-info/:shortName", element: <ProductInfo /> },
];

export default routes;
