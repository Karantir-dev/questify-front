
import Flatpickr from 'react-flatpickr'
import Icon from '../Icon'

import 'flatpickr/dist/themes/material_blue.css'
import './DateTimePicker.css'

function DateTimePicker({ deadline, handleDateChange }) {
  return (
    <div className="flatpickr">
      <Flatpickr
        minDate={new Date()}
        data-enable-time
        value={deadline}
        onChange={date => handleDateChange(date)}
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
