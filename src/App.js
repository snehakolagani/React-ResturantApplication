import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Orders from "./container/orders";
import Logout from "./container/Logout";
import { useState } from "react";

function App() {
  const [cardItem, setCardItem] = useState([]);
  const [order, setOrder] = useState(0);
  const myOrders = (item) => {
    setOrder(order + 1);
    setCardItem(() => [...cardItem, item]);
    //  console.log("carditemssssssss",cardItem)
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home cardItem={cardItem} myOrders={myOrders} order={order} />
            }
          />
          <Route path="/orders" element={<Orders cardItem={cardItem} />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
