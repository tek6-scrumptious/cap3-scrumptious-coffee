// pages and components
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Error from "./pages/Error/Error";
import PaymentScreen from "./pages/paymentScreen/PaymentScreen";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthApi from "./AuthApi";
import RequireAuth from "./components/admin/RequireAuth";

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import ProductsList from "./pages/productsList/ProductsList";
import CartView from "./pages/cartView/CartView";
import ProductDetail from "./pages/productDetail/ProductDetail";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AdminProductView from "./pages/adminDashboard/AdminProductView";
import AdminAddProduct from "./pages/adminDashboard/AdminAddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthApi.Provider>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/*" element={<Error />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/supersecretsquirreladminpage"
              element={<AdminLogin />}
            />
            {/* <Route element={<RequireAuth />}> */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route
              path="/AdminProductView/:id"
              element={<AdminProductView />}
            />
            <Route path="/admin-new-product" element={<AdminAddProduct />} />
            {/* </Route> */}
          </Routes>
          <Footer />
        </AuthApi.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
