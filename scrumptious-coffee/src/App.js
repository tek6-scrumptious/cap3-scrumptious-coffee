// pages and components
import React, {Fragment} from 'react';
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Error from "./pages/Error/Error";
import PaymentScreen from "./pages/paymentScreen/PaymentScreen";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ProductsList from "./pages/productsList/ProductsList";
import CartView from "./pages/cartView/CartView";
import ProductDetail from "./pages/productDetail/ProductDetail";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import ProtectedRoute1 from './pages/adminLogin/ProtectedRoute1';
import ProtectedRoute2 from './pages/adminLogin/ProtectedRoute2'
import ProtectedRoute3 from './pages/adminLogin/ProtectedRoute3'
// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/*" element={<Error />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/supersecretsquirreladminpage" element={<AdminLogin />}/>
            <Route exact path="/admin-dashboard" element={<ProtectedRoute1/>} />
            <Route path="/AdminProductView/:id" element={<ProtectedRoute2/>}/>
            <Route path="/admin-new-product" element={<ProtectedRoute3 />} />
          </Routes>
          <Footer />
      </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
