import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

type TDatePickerProps = {
  handleDateSelected: (date: string) => void
}

const DatePicker = ({ handleDateSelected }: TDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState({});

  const onDayPress = (day) => {
    handleDateSelected(day.dateString)
    setSelectedDate({ [day.dateString]: { selected: true, color: 'orange' }});
  };

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        marginBottom: 60
      }}
      current={'2012-03-01'}
      onDayPress={onDayPress}
      markedDates={selectedDate}
    />
  );
};

export default DatePicker;
