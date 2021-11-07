// https://exercism.org/tracks/javascript/exercises/meetup

function meetup(year, month, ordinal, weekday) {

    let result;

    let weekdaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let ordinalsArr = ['first', 'second', 'third', 'fourth', 'last'];

    let lastDayMonth = new Date(year, month, 0);
    let datesInMonth = [];
    let weekdaysInMonth = [];

    for (let i = 1; i <= lastDayMonth.getDate(); i++) {
        let tempDate = new Date(year, month - 1, i);
        datesInMonth.push(tempDate);  // create array with all dates of that month
        let tempWeekday = tempDate.getDay();
        weekdaysInMonth.push(tempWeekday);  // create array with all weekdays of that month
    }

    let weekdayNumber = weekdaysArr.indexOf(weekday);  // convert e.g. 'Sunday' to 0
    let ordinalNumber = ordinalsArr.indexOf(ordinal);  // convert e.g. 'first' to 0

    if (ordinal == 'teenth') {  // for cases like meetup(2013, 5, 'teenth', 'Sunday')

        result = datesInMonth.filter((date, index) => {  // get a single date ending on 'teenth' (13 to 19)
            return index >= 12 && index <= 18 && weekdaysInMonth[index] === weekdayNumber;
        });

    } else {  // for cases like meetup(2013, 3, 'first', 'Monday')

        let filteredDatesInMonth = datesInMonth.filter((date, index) => {  // only dates with the right weekday
            return weekdaysInMonth[index] === weekdayNumber;
        });

        if (ordinalNumber < 4) {  // for 'first', 'second' etc.
            result = filteredDatesInMonth[ordinalNumber];
        } else {  // for special case 'last'
            result = filteredDatesInMonth[filteredDatesInMonth.length - 1];
        }
    }

    return new Date(result);
}
