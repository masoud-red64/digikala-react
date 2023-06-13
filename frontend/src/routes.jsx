import Index from "./Pages/Index/Index";
import Main from "./Pages/Main/Main";
import CategoryInfo from "./Pages/CategoryInfo/CategoryInfo";

const routes = [
  { path: "/", element: <Index /> },
  { path: "main/:shortName", element: <Main /> },
  { path: "category-info/:shortName", element: <CategoryInfo /> },
];

export default routes;
