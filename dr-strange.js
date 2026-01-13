function addWeek(date) {
    // Define the days in the new 14-day week
    const weekDays = [
        "Monday",      // 0
        "Tuesday",     // 1
        "Wednesday",   // 2
        "Thursday",    // 3
        "Friday",      // 4
        "Saturday",    // 5
        "Sunday",      // 6
        "secondMonday",// 7
        "secondTuesday",// 8
        "secondWednesday",// 9
        "secondThursday",// 10
        "secondFriday",  // 11
        "secondSaturday",// 12
        "secondSunday"   // 13
    ];

    // Calculate the number of days since the epoch (0001-01-01)
    const epoch = new Date('0001-01-01');
    const timeDiff = date - epoch;
    const daysSinceEpoch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Get the index for the new week format
    const weekIndex = daysSinceEpoch % 14;

    // Return the corresponding weekday name
    return weekDays[weekIndex];
}

function timeTravel({ date, hour, minute, second }) {
    // Create a new Date object from the provided date
    const newDate = new Date(date);
    
    // Set the new time using the provided values
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    
    return newDate;
}

