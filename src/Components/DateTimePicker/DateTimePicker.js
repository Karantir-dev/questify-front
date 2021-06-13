import React, {useState} from "react";
import Flatpickr from "react-flatpickr";
import Icon from '../Icon'
import "flatpickr/dist/themes/material_blue.css";
import "./DateTimePicker.css";

function DateTimePicker() {
  const [date, setDate] = useState(new Date())
  return (
    <div className="date-time-container">
      <Flatpickr
        minDate={date}
        data-enable-time
        value={date}
        onChange={date => setDate(date)}
      />
      <Icon
        className="flatpickrInputIconCalendar"
        name="calendar"
        color="#00D7FF"
        size={14}
      />
    </div>
  )
}

export default DateTimePicker 
