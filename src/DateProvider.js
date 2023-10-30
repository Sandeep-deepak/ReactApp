import React, { useState } from 'react';

export const DateContext = React.createContext();

export const DateProvider = ({ children }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  const updateSelectedDate = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <DateContext.Provider value={{ today, selectedDate, updateSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};
