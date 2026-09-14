import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/shop/Cart";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { ROUTES } from "../utility/constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
    </Routes>
    //Below is the code which contains magic strings(i.e. hardcoded route paths)
    // which is not a good practice.
    // So, we have created a constants file to store all the route paths and
    // imported it here to use the constants instead of magic strings.
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/cart" element={<Cart />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
  );
};

export default AppRoutes;
