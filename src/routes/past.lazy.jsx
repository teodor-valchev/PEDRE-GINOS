import {createLazyFileRoute} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import getPastOrders from "../api/getPastOrders.js";
import pastOrder from "../api/pastOrder.js";
import {priceConverter} from "../useCurrency.jsx";

export const Route = createLazyFileRoute('/past')({
  component: PastOrdersRoute,
})

function PastOrdersRoute() {
  const [page, setPage] = useState(1);
  const [focusedOrder, setFocusedOrder] = useState(null);
  const {isLoading, data} = useQuery({
    queryKey: ['past-orders', page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000
  });

  const {isLoading: isLoadingPastOrder, data: pastOrders} = useQuery({
    queryKey: ['past-order', focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 24 * 60 * 60 * 1000,
    enabled: !!focusedOrder
  })

  if (isLoading) {
    return (
      <div className='past-orders'>
      <h2>Loading...</h2>
    </div>)
  }

  return (
    <div className="past-orders">
      <table>
        <thead>
        <tr>
          <td>ID</td>
          <td>Date</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
        {data.map((order) => (
          <tr key={order.order_id}>
            <td>{order.order_id}</td>
            <td>{order.date}</td>
            <td>{order.time}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
