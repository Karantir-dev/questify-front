import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import './DateTimePicker.module.css';

function DateTimePicker() {
  const [value, onChange] = useState(new Date());
  const minDate = new Date(2021, 5, 1);
  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
        minDate={minDate}
      />
    </div>
  );
}

export default DateTimePicker;