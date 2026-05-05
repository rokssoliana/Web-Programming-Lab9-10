// Винесемо ключ в константу, щоб не помилитися при повторному використанні
const BOOKINGS_KEY = 'railway_bookings';

/**
 * Отримує список бронювань з localStorage
 */
export const getBookings = () => {
  try {
    const data = localStorage.getItem(BOOKINGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Помилка при зчитуванні даних з localStorage:", error);
    return [];
  }
};

/**
 * Додає нове бронювання до існуючого списку
 */
export const saveBooking = (booking) => {
  try {
    const bookings = getBookings();
    // Використовуємо spread-оператор для чистого додавання даних
    const updatedBookings = [...bookings, booking];
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updatedBookings));
  } catch (error) {
    console.error("Помилка при збереженні бронювання:", error);
  }
};