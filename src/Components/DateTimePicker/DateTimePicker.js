/* import React from 'react';
import DateTimePickerAPI from 'react-datetime-picker';
import './DateTimePicker.module.css';

function DateTimePicker({ date, handleDateChange }) {
  const minDate = new Date()

  return (
    <div className="date-time-picker-container">
      <DateTimePickerAPI
        onChange={date => {
          handleDateChange(date.getTime())
        }}
        value={new Date(date) || new Date()}
        minDate={minDate}
      />
    </div>
  )
}

export default DateTimePicker */
