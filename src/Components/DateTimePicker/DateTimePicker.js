import React from "react";
import Flatpickr from "react-flatpickr";
import { Component } from "react";
import "flatpickr/dist/themes/material_blue.css";
import "./DateTimePicker.css";

class DateTimePicker extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    return (
      <Flatpickr
        data-enable-time
        value={date}
        onChange={date => {
          this.setState({ date });
        }}
      />
      
    );
  }
}

export default DateTimePicker
