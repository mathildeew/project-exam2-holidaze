export function calculatePrice(startDate, endDate, price) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const difference = Math.abs(end.getTime() - start.getTime());
  const numberOfNights = Math.ceil(difference / (1000 * 60 * 60 * 24));
  const totalPrice = numberOfNights * price;

  if (numberOfNights < 1) {
    return price;
  }
  return totalPrice;
}

export function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const difference = Math.abs(end.getTime() - start.getTime());
  const numberOfNights = Math.ceil(difference / (1000 * 60 * 60 * 24));

  if (numberOfNights < 1) {
    return "1";
  }
  return numberOfNights;
}
