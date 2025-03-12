const intl  = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function useCurrency(price) {
  return priceConverter(price);
}

export const priceConverter = (price) => {
  intl.format(price);
}