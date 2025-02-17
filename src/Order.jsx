import {Pizza} from './Pizza'
import {useEffect, useState} from "react";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("S");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
  }

  console.log(selectedPizza)

  async function getPizza() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const pizzaRes = await  fetch("/api/pizzas")
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }
  useEffect(  async() => {
     await getPizza();
  }, [])

  return (
    <div className='order'>
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name='pizza-type' value={pizzaType}>
              {pizzaTypes.map((pizzaType) => (
                <option key={pizzaType.id}
                         value={pizzaType.category}
                >{pizzaType.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size"> Pizza Size</label>
            <div>
            <span>
              <input
                checked={pizzaSize === "S"}
                type="radio"
                name="pizza-size"
                value='S'
                id='pizza-s'
                onChange={(e) => setPizzaSize(e.target.value)}
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
              <span>
              <input
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                value='M'
                id='pizza-m'
                onChange={(e) => setPizzaSize(e.target.value)}
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
              <span>
              <input
                checked={pizzaSize === "L"}
                type="radio"
                name="pizza-size"
                value='L'
                id='pizza-l'
                onChange={(e) => setPizzaSize(e.target.value)}
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name={selectedPizza?.name}
              desription={selectedPizza?.desription}
              image={selectedPizza?.image}
            />
            <p>13.37$</p>
          </div>
        </div>
      </form>
    </div>
  )
}