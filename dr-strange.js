// Function to get weekday in a 14-day week
function addWeek(d) {
  const start = new Date('0001-01-01'); // Epoch date (Day 1 = Monday)
  const diff = Math.floor((d - start) / (1000 * 60 * 60 * 24)); // Days between input date and epoch
  const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
    "secondFriday", "secondSaturday", "secondSunday"
  ];
  return days[diff % 14]; // Return correct weekday
}

// Function to set custom time to a Date
function timeTravel({ date, hour, minute, second }) {
  let d = new Date(date); // Copy the given date
  d.setHours(hour);       // Set hour
  d.setMinutes(minute);   // Set minute
  d.setSeconds(second);   // Set second
  return d;               // Return updated date
}

// Examples
console.log(addWeek(new Date('0001-01-01'))); // Monday
console.log(addWeek(new Date('0001-01-07'))); // Sunday
console.log(addWeek(new Date('0001-01-08'))); // secondMonday
console.log(addWeek(new Date('0001-01-09'))); // secondTuesday

console.log(
  timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22
  }).toString()
);
// Output: Fri May 29 2020 21:22:22 GMT+0100
