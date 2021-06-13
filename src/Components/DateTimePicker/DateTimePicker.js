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
      <div className="flatpickr">
        <Flatpickr options={{ minDate: date, wrap: true }}
        data-enable-time
        value={date}
        onChange={date => {
          this.setState({ date });
        }}
        />
        <Icon
          title="toggle"
          data-toggle
          className="flatpickrInputIconCalendar input-button"
          name="calendar"
          color="#00d7ff"
          size={14}
        />
      </div>
    );
  }
}

export default DateTimePicker 
