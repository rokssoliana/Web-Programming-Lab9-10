export const getBookings = () => {
  const data = localStorage.getItem('railway_bookings');
  return data ? JSON.parse(data) : [];
};

export const saveBooking = (booking) => {
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem('railway_bookings', JSON.stringify(bookings));
};