import {createRoot} from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import {Header} from "./Header.jsx";
import {CartContext} from "./contexts.jsx";
import {useState} from "react";

const App = () => {
  const cartHook = useState([])
  return (
    <div>
      <CartContext.Provider value={cartHook}>
        <Header/>
        <Order/>
        <PizzaOfTheDay/>
      </CartContext.Provider>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App/>)