import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import Cart from "../pages/shop/Cart";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import { ROUTES } from "../utility/constants";
import ProductManagement from "../pages/admin/ProductManagement";
import OrderManagement from "../pages/admin/OrderManagement";
import MyOrders from "../pages/order/MyOrders.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.MY_ORDER} element={<MyOrders />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ADMIN.PRODUCTS} element={<ProductManagement />} />
      <Route path={ROUTES.ADMIN.ORDERS} element={<OrderManagement />} />
    </Routes>
  );
};

export default AppRoutes;
