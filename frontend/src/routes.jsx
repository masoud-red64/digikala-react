import Index from "./Pages/Index/Index";
import Main from "./Pages/Main/Main";
import CategoryInfo from "./Pages/CategoryInfo/CategoryInfo";
import Login from "./Pages/Login/Login";

const routes = [
  { path: "/", element: <Index /> },
  { path: "main/:shortName", element: <Main /> },
  { path: "category-info/:shortName/:mainID", element: <CategoryInfo /> },
  { path: "login", element: <Login /> },
];

export default routes;
