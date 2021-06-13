import Flatpickr from "react-flatpickr";
import Icon from '../Icon'
import { Component } from "react";
import "flatpickr/dist/themes/material_blue.css";
import "./DateTimePicker.css";

class DateTimePicker extends Component   {
  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    return (
      <div className="date-time-container">
        <Flatpickr
          data-enable-time
          value={date}
          minDate={date}
          onChange={date => {
          this.setState({ date });
        }}
        />
        <Icon
          title="toggle"
          data-toggle
          className="flatpickrInputIconCalendar"
          name="calendar"
          color="#00d7ff"
          size={14}
        />
      </div>
    );
  }
}

export default DateTimePicker 
