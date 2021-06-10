/* import React, { useState } from 'react'
import DateTimePickerAPI from 'react-datetime-picker/dist/entry.nostyle'
import './DateTimePicker.module.css'

function DateTimePicker({ date, handleDateChange }) {
  const [value, onChange] = useState(date || new Date())
  const minDate = new Date(2021, 5, 1)
  const onDateChange = date => {
    onChange(date)
    handleDateChange(date)
  }
  return (
    <div>
      <DateTimePickerAPI
        onChange={onDateChange}
        value={value}
        minDate={minDate}
      />
    </div>
  )
}

export default DateTimePicker */
