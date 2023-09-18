// https://stackoverflow.com/questions/19225414/how-to-get-the-hours-difference-between-two-date-objects

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
