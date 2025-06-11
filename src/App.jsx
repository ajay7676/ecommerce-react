import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/pages/home/Home";
import Order from "./components/pages/order/Order";
import Cart from "./components/pages/cart/Cart";
import Dashboard from "./components/pages/admin/dashboard/Dashboard";
import NoPage from "./components/pages/nopage/NoPage";
import MyState from "./context/MyState";
import SignupForm from "./components/signup/SignupForm";
import LoginForm from "./components/pages/login/LoginForm";
import ProductInfo from "./components/pages/productInfo/ProductInfo";
import AddProduct from "./components/pages/admin/product/AddProduct";
import UpdateProduct from "./components/pages/admin/product/UpdateProduct";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import ProtectedUserRoute from "./routes/ProtectedUserRoute";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/order" element={<ProtectedUserRoute>
                <Order />
              </ProtectedUserRoute>} />
              <Route path="/cart" element={<ProtectedUserRoute>
                <Cart />
              </ProtectedUserRoute>} />
              <Route path="/dashboard" element={<ProtectedAdminRoute>
                <Dashboard />
              </ProtectedAdminRoute>} />
              <Route path="/addproduct" element={<ProtectedAdminRoute>
                <AddProduct />
              </ProtectedAdminRoute>} />
              <Route path="/updateproduct" element={<ProtectedAdminRoute>
                <UpdateProduct />
              </ProtectedAdminRoute>} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/productinfo/:id" element={<ProductInfo />} />
              <Route path="/*" element={<NoPage />} />
            </Routes>
            <ToastContainer />
          </Router>
      </MyState>
    </>
  );
}

export default App;
