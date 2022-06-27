const talkingCalendar = function(date) {

  date = date.split(/[/,/]/);
  date.push(date[0]);
  date.splice(0, 1);

  let day = parseInt(date[1])
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  switch (date[0]) {
    case '01':
      date[0] = month[0]
      break;
    case '02':
      date[0] = month[1]
      break;
    case '03':
      date[0] = month[2]
      break;
    case '04':
      date[0] = month[3]
      break;
    case '05':
      date[0] = month[4]
      break;
    case '06':
      date[0] = month[5]
      break;
    case '07':
      date[0] = month[6]
      break;
    case '08':
      date[0] = month[7]
      break;
    case '09':
      date[0] = month[8]
      break;
    case '10':
      date[0] = month[9]
      break;
    case '11':
      date[0] = month[10]
      break;
    case '12':
      date[0] = month[11]
      break;
    default:
      break;
  }

  if (day === 3 || day === 23) {
    date[1] = day + 'rd';
  } else if (day === 2 || day === 22) {
    date[1] = day + 'nd';
  } else if (day === 1 || day == 21 || day === 31) {
    date[1] = day + 'st';
  } else {
    date[1] = day + 'th';
  }

  return date[0] + ' ' + date[1] + ', ' + date[2];

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));