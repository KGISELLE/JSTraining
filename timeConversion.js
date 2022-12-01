//Dado un tiempo en formato de hora AM/PM
//conviértalo a hora militar (24 horas).
s = "12:01:00PM" //Return '12:01:00'.
// s = "12:01:00AM" //Return '00:01:00'.

const process = (s) => {
  const hourSplit = s.split(':')
  console.log(hourSplit, "hourSplit")

  const hours = hourSplit[0];
  console.log(hours, "hours")

  const seconds = hourSplit[2];
  console.log(seconds, "seconds")

  const sinPMAM = seconds.slice(0, -2);
  console.log(sinPMAM, "sinPMAM")

  const format = ':' + hourSplit[1] + ':' + sinPMAM;
  console.log(format, "format")
  
  
  let result = '';
  if (s.match('PM')) {
    const hourResult = parseInt(hours) + 12;
    console.log(hourResult, "hourResult");
    if (hourResult == 24) {
        const hour24 = hourResult - 12;
        console.log(hour24, "hour24");
        result = hour24 + format;
        console.log(result, "result")
    } else {
        result = hourResult + format;
        console.log(result, "result")
    }
} else {
    if (hours == 12) {
        const hour00 = '00';
        console.log(hour00, "hour00")
        result = hour00 + format;
        console.log(result, "result")
    } else {
        result = hours + format;
        console.log(result, "result")
    }
}
return result;

}

process(s);


//TODO: Clean function for HK
function timeConversion(s) {
  const hourSplit = s.split(':')

  const hours = hourSplit[0];

  const seconds = hourSplit[2]

  const sinPMAM = seconds.slice(0, -2)

  const format = ':' + hourSplit[1] + ':' + sinPMAM
  
  let result = '';
  
  if (s.match('PM')) {
      const hourResult = parseInt(hours) + 12;
      if (hourResult == 24) {
          const hour24 = hourResult - 12;
          result = hour24 + format;
      } else {
          result = hourResult + format;
      }
  } else {
      if (hours == 12) {
          const hour00 = '00';
          result = hour00 + format;
      } else {
          result = hours + format;
      }
  }
  return result;
}