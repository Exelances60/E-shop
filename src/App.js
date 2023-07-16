import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./routers/Navigation/Navigation";
import Homepage from "./routers/Home/Homepage";
import PayPage from "./routers/PayPage/PayPage";
import ShopPage from "./routers/ShopPage/ShopPage";
import ProductPage from "./componets/ProductPage/ProductPage";
import Signup from "./routers/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="/pay" element={<PayPage></PayPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
