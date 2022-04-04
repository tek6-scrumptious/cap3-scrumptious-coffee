// pages and components
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Error from "./pages/Error/Error";
import PaymentScreen from "./pages/paymentScreen/PaymentScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/error" element={<Error />} />
          <Route path="/payment" element={<PaymentScreen />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
