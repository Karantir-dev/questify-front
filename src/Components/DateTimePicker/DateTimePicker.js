import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import './DateTimePicker.module.css';

function DateTimePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default DateTimePicker;