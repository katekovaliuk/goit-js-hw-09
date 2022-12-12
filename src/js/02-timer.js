import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    btnStart: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
    }
// console.log(refs.btnStart);
// console.log(refs.dataDays);
// console.log(refs.dataHours);
// console.log(refs.dataMinutes);
// console.log(refs.dataSeconds);

const date = new Date();
// console.log(date);
let deltaDate = 0;
let timer = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        inputDate(selectedDates[0]);  
    // console.log(selectedDates[0]);
  },
};

flatpickr("input#datetime-picker", options); 

function inputDate(selectedDates) {
    if (selectedDates < date) {
            Notify.failure('Please choose a date in the future');
           refs.btnStart.disabled = true;
            return;
        } else {
            Notify.success('Selected date is correct');
            refs.btnStart.disabled = false;
    };

    startTimer(selectedDates);       
}

function startTimer(selectedDates) {
    deltaDate = selectedDates - date;
    // console.log('timer', timer);
    // console.log(deltaDate);
    refs.btnStart.addEventListener('click', () => {
        timeId = setInterval(() => {
            if (deltaDate <= 0) {
                clearInterval(timeId);
                return;
            }
            timer = convertMs(deltaDate);
            updateTimerFace(timer);
            deltaDate -= 1000;
        }, 1000);
    });
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
   
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


function updateTimerFace(timer) {
    convertMs(timer);
    refs.dataDays.textContent = `${timer.days}`;
    refs.dataHours.textContent = `${timer.hours}`;
    refs.dataMinutes.textContent = `${timer.minutes}`;
    refs.dataSeconds.textContent = `${timer.seconds}`;   
}












