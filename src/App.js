import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <MainLayout />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
