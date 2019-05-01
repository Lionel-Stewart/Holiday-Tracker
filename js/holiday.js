const today = new Date(); 
const currentYear = today.getFullYear();

//Holidays
const newYearsDay = new Date('1 1 ' + currentYear);
const martinLutherKingDay = new Date('1 21 ' + currentYear);
const presidentsDay = new Date('2 18 ' + currentYear);
const memorialDay = new Date('5 27 ' + currentYear);
const independenceDay = new Date('7 4 ' + currentYear);
const postIndependenceDay = new Date('7 5 ' + currentYear);
const laborDay = new Date('9 2 ' + currentYear);
const thanksGivingDay = new Date('11 28 ' + currentYear);
const postThanksGivingDay = new Date('11 29 ' + currentYear);
const christmasDay = new Date('12 25 ' + currentYear);
const nextNewYearsDay = new Date('1 1 ' + (currentYear + 1));

const nameArr = [
  "New Years Day", 
  "Martin Luther King Day",
  "Presidents Day",
  "Memorial Day",
  "Independence Day",
  "Post Independence Day",
  "Labor Day",
  "Thanks Giving Day",
  "Post Thanks Giving Day",
  "Christmas Day",
  "New Years Day"
];

const holidayArr = [
	newYearsDay, 
	martinLutherKingDay,
	presidentsDay,
	memorialDay,
	independenceDay,
	postIndependenceDay,
	laborDay,
	thanksGivingDay,
	postThanksGivingDay,
	christmasDay,
  nextNewYearsDay
];

function getNearestHoliday() { 
  for (var i = 0; i < holidayArr.length; i++) {
    if(holidayArr[i].getTime() >= today.getTime()) {
      const holiday = nameArr[i];
      const timeDiff = Math.abs(today.getTime() - holidayArr[i].getTime());
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if(dayDiff === 0) {
        document.querySelector(".statement").textContent = `${holiday} is today!`;
      } else if(dayDiff === 1) {
        document.querySelector(".statement").textContent = `${holiday} is tomorrow!`;
      } else {
        document.querySelector(".statement").textContent = `${holiday} is ${dayDiff} days from now`;
      }
      break;
    }
  }
}

getNearestHoliday();