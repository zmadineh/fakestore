import "./App.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./context/cart/CartProvider";
import AuthProvider from "./context/auth/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
