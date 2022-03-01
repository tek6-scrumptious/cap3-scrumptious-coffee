// pages and components
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
