// pages and components
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
