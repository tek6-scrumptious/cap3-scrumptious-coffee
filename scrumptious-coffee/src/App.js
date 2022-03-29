// pages and components
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
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
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
