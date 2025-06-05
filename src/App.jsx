
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/pages/home/Home'
import Order from './components/pages/order/Order';
import Cart from './components/pages/cart/Cart';
import Dashboard from './components/pages/admin/dashboard/Dashboard';
import NoPage from './components/pages/nopage/NoPage';
import MyState from './context/MyState';
function App() {

  return (
    <>
      <MyState>
        <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
    </Router>
      </MyState>
    </>
  )
}

export default App
