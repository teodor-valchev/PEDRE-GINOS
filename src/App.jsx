import {createRoot} from "react-dom/client";
import {Pizza} from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's = Order Now</h1>
      <Pizza image={"./public/pizzas/pepperoni.webp"}
             title="Padre Gino"
             description='peperoni and cheese'/>
      <Pizza title="Hawain"
             description='hime, pinapple. n stuff'
             image={"./public/pizzas/big_meat.webp"}
      />
      <Pizza title="Americano"
             description='french fries'
             image={"./public/pizzas/five_cheese.webp"}/>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App/>)