import "./App.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./toolkit/store";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
