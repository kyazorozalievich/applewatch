import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import Admin from "./components/Admin";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import History from "./components/History";
import Error from "./components/Error";
import Details from "./components/Details";
import Laptop from "./components/Department/Laptop";
import Mobile from "./components/Department/Mobile";
import Monitor from "./components/Department/Monitor";
import Headphone from "./components/Department/Headphone";
import Speaker from "./components/Department/Speaker/idnex";

function App() {
  let routes = [
    {
      id: 1,
      link: "/",
      component: <Home />,
    },
    {
      id: 2,
      link: "/about",
      component: <About />,
    },
    {
      id: 3,
      link: "/shop",
      component: <Shop />,
    },
    {
      id: 4,
      link: "/categories",
      component: <Categories />,
    },
    {
      id: 5,
      link: "/admin",
      component: <Admin />,
    },
    {
      id: 6,
      link: "/search/:name",
      component: <Search />,
    },
    {
      id: 7,
      link: "/favorite",
      component: <Favorite />,
    },
    {
      id: 8,
      link: "/basket",
      component: <Basket />,
    },
    {
      id: 9,
      link: "*",
      component: <Error />,
    },
    {
      id: 10,
      link: "/history",
      component: <History />,
    },
    {
      id: 11,
      link: "/details/:id",
      component: <Details />,
    },
    {
      id: 12,
      link: "/headphone",
      component: <Headphone />,
    },
    {
      id: 13,
      link: "/laptop",
      component: <Laptop />,
    },
    {
      id: 14,
      link: "/mobile",
      component: <Mobile />,
    },
    {
      id: 15,
      link: "/monitor",
      component: <Monitor />,
    },
    {
      id: 16,
      link: "/speaker",
      component: <Speaker />,
    },
  ];

  return (
    <div>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route element={el.component} path={el.link} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
