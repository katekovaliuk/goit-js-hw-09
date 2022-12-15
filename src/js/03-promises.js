import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
      resolve("Success!");
      // Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
      // Fulfill
    } else {
      reject("Error!");// Reject
      // Notify.failure(`Rejected promise ${position} in ${delay} ms`);
    }
    }, delay)
    
  });
};

// createPromise(3, 1000)
//   .then(({ position, delay }) => {
//     // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
//   })
//   .catch(({ position, delay }) => {
//     // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     Notify.failure(`Rejected promise ${position} in ${delay} ms`);
//   });

const formRef = document.querySelector('.form');
console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const firstDelay = Number(formRef.delay.value);
  const stepDelay = Number(formRef.step.value);
  const amount = Number(formRef.amount.value);
  // console.log(firstDelay);
  // console.log(stepDelay);
  // console.log(amount);

  for (let position = 1; position <= amount; position += 1) {
    let delay = firstDelay + stepDelay * (position - 1);
    
    console.log({ position, delay });
    createPromise(position, delay)
      .then(() => {
  // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(() => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`Rejected promise ${position} in ${delay} ms`);
      });
  }

};