import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

const DatePicker = () => {
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');

  const onDayPress = (day) => {
    if (!selectedStart) {
      setSelectedStart(day.dateString);
      setSelectedEnd('');
    } else if (!selectedEnd && day.dateString >= selectedStart) {
      setSelectedEnd(day.dateString);
    } else {
      setSelectedStart(day.dateString);
      setSelectedEnd('');
    }
  };

  const markedDates = {};

  if (selectedStart) {
    markedDates[selectedStart] = { selected: true, color: 'orange' };
  }

  if (selectedStart && selectedEnd) {
    let currentDate = new Date(selectedStart);
    while (currentDate <= new Date(selectedEnd)) {
      const dateString = currentDate.toISOString().split('T')[0];
      markedDates[dateString] = { selected: true, color: 'orange' };
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
      }}
      current={'2012-03-01'}
      onDayPress={onDayPress}
      markedDates={markedDates}
    />
  );
};

export default DatePicker;
