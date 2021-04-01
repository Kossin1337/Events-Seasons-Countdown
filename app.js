const springCountdownTimers = document.querySelectorAll('.spring-countdown-container .countdown-box h4');
const summerCountdownTimers = document.querySelectorAll('.summer-countdown-container .countdown-box h4');
const autumnCountdownTimers = document.querySelectorAll('.autumn-countdown-container .countdown-box h4');
const winterCountdownTimers = document.querySelectorAll('.winter-countdown-container .countdown-box h4');

/* SEASONS DATE */
const SPRING = new Date('March 20, 2022 11:33:00').getTime();
const SUMMER = new Date('June 20, 2021 00:00:00').getTime();
const AUTUMN = new Date('September 22, 2021 02:32:00').getTime();
const WINTER = new Date('December 21, 2021 16:00:00').getTime();
const oneDay = (24 * 60 * 60 * 1000);
const oneHour = (60 * 60 * 1000);
const oneMinute = (60 * 1000);

function updateSeasonsCountdowns() {
  /* CURRENT DATE */
  const currentTime = Date.now();

  /* SEASONS DATE */
  const springTime = SPRING - currentTime;
  const summerTime = SUMMER - currentTime;
  const autumnTime = AUTUMN - currentTime;
  const winterTime = WINTER - currentTime;
  
  // 1s - 1000ms, 1m - 60s, 1h - 60m, 1d - 24h, 1y - 365d or 366d
  // console.log(`One day time in ms: ${oneDay}`);
  // console.log(`One hour time in ms: ${oneHour}`);
  // console.log(`One minute time in ms: ${oneMinute}`);

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

  /* set values array */
  const springValues = [springDays, springHours, springMinutes, springSeconds];
  const summerValues = [summerDays, summerHours, summerMinutes, summerSeconds];
  const autumnValues = [autumnDays, autumnHours, autumnMinutes, autumnSeconds];
  const winterValues = [winterDays, winterHours, winterMinutes, winterSeconds];

  function format(value) {
    return value < 10 ? `0${value}` : value;
  }

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
}

let countdown = setInterval(updateSeasonsCountdowns, 1000);
