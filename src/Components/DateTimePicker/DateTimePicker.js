import Flatpickr from 'react-flatpickr'
import Icon from '../Icon'

import 'flatpickr/dist/themes/material_blue.css'
import './DateTimePicker.css'

function DateTimePicker({ deadline, handleDateChange }) {
  return (
    <div className="date-time-container">
      <Flatpickr
        options={{
          enableTime: true,
          time_24hr: true,
          minTime:
            new Date().getDate() === new Date(deadline).getDate()
              ? new Date().setTime(new Date().getTime())
              : null,
          enable: [
            {
              from: new Date().setDate(new Date().getDate() - 1),
              to: new Date().setFullYear(new Date().getFullYear() + 10),
            },
          ],
        }}
        data-enable-time
        value={deadline}
        onChange={date => {
          handleDateChange(new Date(date))
        }}
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
