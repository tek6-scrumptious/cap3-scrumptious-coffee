// pages and components
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Error from "./pages/Error/Error";
import PaymentScreen from "./pages/paymentScreen/PaymentScreen";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import ReturnPolicy from "./pages/returnPolicy/ReturnPolicy"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import ProductsList from "./pages/productsList/ProductsList";
import CartView from "./pages/cartView/CartView";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/error" element={<Error />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/faq" element={<ReturnPolicy />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
