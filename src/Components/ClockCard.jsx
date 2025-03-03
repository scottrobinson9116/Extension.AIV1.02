import React from "react";

var currentDate = new Date();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var day = currentDate.getDate();
var monthName;

if (minutes == 0) {
  minutes = "00";
} else if (minutes < 10) {
  minutes = "0" + minutes;
}

if (hours > 12) {
  hours = hours - 12;
  var APM = " PM";
} else {
  var APM = " AM";
}

switch (month) {
  case 0:
    monthName = "January";
    break;
  case 1:
    monthName = "February";
    break;
  case 2:
    monthName = "March";
    break;
  case 3:
    monthName = "April";
    break;
  case 4:
    monthName = "May";
    break;
  case 5:
    monthName = "June";
    break;
  case 6:
    monthName = "July";
  case 7:
    monthName = "August";
    break;
  case 8:
    monthName = "September";
    break;
  case 9:
    monthName = "October";
    break;
  case 10:
    monthName = "November";
    break;
  case 11:
    monthName = "December";
    break;
}

function ClockCard() {
  return (
    <div className="ClockCard">
      <p id="store">Extension.AI</p>
      <p>
        {hours}:{minutes}
        {APM}
      </p>
      <p>
        {monthName} {day}, {year}
      </p>
    </div>
  );
}

export default ClockCard;
