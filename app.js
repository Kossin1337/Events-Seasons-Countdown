const springCountdownTimers = document.querySelectorAll('.spring-countdown-container .countdown-box h4');
const summerCountdownTimers = document.querySelectorAll('.summer-countdown-container .countdown-box h4');
const autumnCountdownTimers = document.querySelectorAll('.autumn-countdown-container .countdown-box h4');
const winterCountdownTimers = document.querySelectorAll('.winter-countdown-container .countdown-box h4');

const easterCountdownTimers = document.querySelectorAll('.easter-countdown-container .countdown-box h4');
const halloweenCountdownTimers = document.querySelectorAll('.halloween-countdown-container .countdown-box h4');
const christmasCountdownTimers = document.querySelectorAll('.christmas-countdown-container .countdown-box h4');
const newYearsEveCountdownTimers = document.querySelectorAll('.new-years-eve-countdown-container .countdown-box h4');
const mothersDayCountdownTimers = document.querySelectorAll('.mothers-day-countdown-container .countdown-box h4');
const fathersDayCountdownTimers = document.querySelectorAll('.fathers-day-countdown-container .countdown-box h4');
const lgbtCountdownTimers = document.querySelectorAll('.lgbt-day-countdown-container .countdown-box h4');
const americaIndependenceDayCountdownTimers = document.querySelectorAll('.america-independence-day-countdown-container .countdown-box h4');

/* SEASONS DATE */
const SPRING = new Date('March 20, 2022 11:33:00').getTime();
const SUMMER = new Date('June 20, 2021 00:00:00').getTime();
const AUTUMN = new Date('September 22, 2021 02:32:00').getTime();
const WINTER = new Date('December 21, 2021 16:00:00').getTime();

/* EVENTS DATE */
const EASTER = new Date('April 4, 2021 00:00:00').getTime();
const HALLOWEEN = new Date('October 31, 2021 00:00:00').getTime();
const CHRISTMAS = new Date('December 25, 2021 00:00:00').getTime();
const NEW_YEARS_EVE = new Date('December 31, 2021 24:00:00').getTime();
const MOTHERS_DAY = new Date('May 9, 2021 12:00:00').getTime();
const FATHERS_DAY = new Date('June 20, 2021 12:00:00').getTime();
const LGBT_NCOD = new Date('October 11, 2021 00:00:00').getTime();
const AMERICA_INDEPENDENCE_DAY = new Date('July 4, 2021 12:00:00').getTime();

const oneDay = (24 * 60 * 60 * 1000);
const oneHour = (60 * 60 * 1000);
const oneMinute = (60 * 1000);

function updateCountdowns () {
  /* CURRENT DATE */
  const currentTime = Date.now();

  /* SEASONS DATE */
  const springTime = SPRING - currentTime;
  const summerTime = SUMMER - currentTime;
  const autumnTime = AUTUMN - currentTime;
  const winterTime = WINTER - currentTime;

  /* EVENTS DATE */
  const easterTime = EASTER - currentTime;
  const halloweenTime = HALLOWEEN - currentTime;
  const christmasTime = CHRISTMAS - currentTime;
  const newYearsEveTime = NEW_YEARS_EVE - currentTime;
  const mothersDayTime = MOTHERS_DAY - currentTime;
  const fathersDayTime = FATHERS_DAY - currentTime;
  const lgbtNcodTime = LGBT_NCOD - currentTime;
  const americaIndependenceDayTime = AMERICA_INDEPENDENCE_DAY - currentTime;
  
  // 1s - 1000ms, 1m - 60s, 1h - 60m, 1d - 24h, 1y - 365d or 366d
  // console.log(`One day time in ms: ${oneDay}`);
  // console.log(`One hour time in ms: ${oneHour}`);
  // console.log(`One minute time in ms: ${oneMinute}`);
  /* SEASONS */
  let springDays = Math.floor(springTime/oneDay);
  let springHours = Math.floor((springTime % oneDay) / oneHour);
  let springMinutes = Math.floor((springTime % oneHour) / oneMinute);
  let springSeconds = Math.floor((springTime % oneMinute) / 1000);

  let summerDays = Math.floor(summerTime/oneDay);
  let summerHours = Math.floor((summerTime % oneDay) / oneHour);
  let summerMinutes = Math.floor((summerTime % oneHour) / oneMinute);
  let summerSeconds = Math.floor((summerTime % oneMinute) / 1000);

  let autumnDays = Math.floor(autumnTime/oneDay);
  let autumnHours = Math.floor((autumnTime % oneDay) / oneHour);
  let autumnMinutes = Math.floor((autumnTime % oneHour) / oneMinute);
  let autumnSeconds = Math.floor((autumnTime % oneMinute) / 1000);

  let winterDays = Math.floor(winterTime/oneDay);
  let winterHours = Math.floor((winterTime % oneDay) / oneHour);
  let winterMinutes = Math.floor((winterTime % oneHour) / oneMinute);
  let winterSeconds = Math.floor((winterTime % oneMinute) / 1000);

  /* EVENTS */
  let easterDays = Math.floor(easterTime/oneDay);
  let easterHours = Math.floor((easterTime % oneDay) / oneHour);
  let easterMinutes = Math.floor((easterTime % oneHour) / oneMinute);
  let easterSeconds = Math.floor((easterTime % oneMinute) / 1000);

  let halloweenDays = Math.floor(halloweenTime/oneDay);
  let halloweenHours = Math.floor((halloweenTime % oneDay) / oneHour);
  let halloweenMinutes = Math.floor((halloweenTime % oneHour) / oneMinute);
  let halloweenSeconds = Math.floor((halloweenTime % oneMinute) / 1000);

  let christmasDays = Math.floor(christmasTime/oneDay);
  let christmasHours = Math.floor((christmasTime % oneDay) / oneHour);
  let christmasMinutes = Math.floor((christmasTime % oneHour) / oneMinute);
  let christmasSeconds = Math.floor((christmasTime % oneMinute) / 1000);

  let newYearsEveDays = Math.floor(newYearsEveTime/oneDay);
  let newYearsEveHours = Math.floor((newYearsEveTime % oneDay) / oneHour);
  let newYearsEveMinutes = Math.floor((newYearsEveTime % oneHour) / oneMinute);
  let newYearsEveSeconds = Math.floor((newYearsEveTime % oneMinute) / 1000);

  let mothersDayDays = Math.floor(mothersDayTime/oneDay);
  let mothersDayHours = Math.floor((mothersDayTime % oneDay) / oneHour);
  let mothersDayMinutes = Math.floor((mothersDayTime % oneHour) / oneMinute);
  let mothersDaySeconds = Math.floor((mothersDayTime % oneMinute) / 1000);

  let fathersDayDays = Math.floor(fathersDayTime/oneDay);
  let fathersDayHours = Math.floor((fathersDayTime % oneDay) / oneHour);
  let fathersDayMinutes = Math.floor((fathersDayTime % oneHour) / oneMinute);
  let fathersDaySeconds = Math.floor((fathersDayTime % oneMinute) / 1000);

  let lgbtDays = Math.floor(lgbtNcodTime/oneDay);
  let lgbtHours = Math.floor((lgbtNcodTime % oneDay) / oneHour);
  let lgbtMinutes = Math.floor((lgbtNcodTime % oneHour) / oneMinute);
  let lgbtSeconds = Math.floor((lgbtNcodTime % oneMinute) / 1000);

  let americaIndependenceDayDays = Math.floor(americaIndependenceDayTime/oneDay);
  let americaIndependenceDayHours = Math.floor((americaIndependenceDayTime % oneDay) / oneHour);
  let americaIndependenceDayMinutes = Math.floor((americaIndependenceDayTime % oneHour) / oneMinute);
  let americaIndependenceDaySeconds = Math.floor((americaIndependenceDayTime % oneMinute) / 1000);

  /* SEASONS */
  const springValues = [springDays, springHours, springMinutes, springSeconds];
  const summerValues = [summerDays, summerHours, summerMinutes, summerSeconds];
  const autumnValues = [autumnDays, autumnHours, autumnMinutes, autumnSeconds];
  const winterValues = [winterDays, winterHours, winterMinutes, winterSeconds];

  /* EVENTS */
  const easterValues = [easterDays, easterHours, easterMinutes, easterSeconds];
  const halloweenValues = [halloweenDays, halloweenHours, halloweenMinutes, halloweenSeconds];
  const christmasValues = [christmasDays, christmasHours, christmasMinutes, christmasSeconds];
  const newYearsEveValues = [newYearsEveDays, newYearsEveHours, newYearsEveMinutes, newYearsEveSeconds];
  const mothersDayValues = [mothersDayDays, mothersDayHours, mothersDayMinutes, mothersDaySeconds];
  const fathersDayValues = [fathersDayDays, fathersDayHours, fathersDayMinutes, fathersDaySeconds];
  const lgbtValues = [lgbtDays, lgbtHours, lgbtMinutes, lgbtSeconds];
  const americaIndependenceDayValues = [americaIndependenceDayDays, americaIndependenceDayHours, americaIndependenceDayMinutes, americaIndependenceDaySeconds];


  function format(value) {
    return value < 10 ? `0${value}` : value;
  }

  /* SEASONS */
  springCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(springValues[index]);
  });
  summerCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(summerValues[index]);
  });
  autumnCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(autumnValues[index]);
  });
  winterCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(winterValues[index]);
  });

  /* EVENTS */
  easterCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(easterValues[index]);
  });
  halloweenCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(halloweenValues[index]);
  });
  christmasCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(christmasValues[index]);
  });
  newYearsEveCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(newYearsEveValues[index]);
  });
  mothersDayCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(mothersDayValues[index]);
  });
  fathersDayCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(fathersDayValues[index]);
  });
  lgbtCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(lgbtValues[index]);
  });
  americaIndependenceDayCountdownTimers.forEach((countdownTimer, index) => {
    countdownTimer.innerHTML = format(americaIndependenceDayValues[index]);
  });
}

let countdown = setInterval(updateCountdowns, 1000);
