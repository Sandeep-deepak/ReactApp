// dateUtils.js
let selectedDate = new Date();

export const setSelectedDate = (date) => {
  selectedDate = date;
};

export const getSelectedDate = () => {
  return selectedDate;
};
