import "./App.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./context/cart/CartProvider";
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
