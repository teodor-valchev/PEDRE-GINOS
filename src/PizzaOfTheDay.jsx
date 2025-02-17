import {usePizzaOfTheDay} from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const PizzaOfTheDay = () => {
  const pizzaOffTheDay = usePizzaOfTheDay();

  if (!pizzaOffTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pizza-of-the-day'>
      <h2>Pizza of the Day</h2>
      <div className='pizza-of-the-day-info'>
        <h3>{pizzaOffTheDay.name}</h3>
        <p>{pizzaOffTheDay.description}</p>
        <p className="pizza-of-the-day-price">
          From: {intl.format(pizzaOffTheDay.sizes.S)}
        </p>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOffTheDay.image}
          alt={pizzaOffTheDay.name}/>
      </div>
    </div>
  )
}

export default PizzaOfTheDay;