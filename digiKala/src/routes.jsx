import Index from "./Pages/Index/Index";
import Main from "./Pages/Main/Main";

const routes = [
    { path: "/", element: <Index /> },
    { path: "main/:shortName", element: <Main /> },
];

export default routes;
