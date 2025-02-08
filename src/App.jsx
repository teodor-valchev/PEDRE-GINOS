import {createRoot} from "react-dom/client";
import {Pizza} from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's = Order Now</h1>
      <Pizza title="Padre Gino" description='peperoni and cheese'/>
      <Pizza title="Hawain" description='hime, pinapple. n stuff'/>
      <Pizza title="Americano" description='french fries'/>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App/>)