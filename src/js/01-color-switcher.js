const bodyRef = document.querySelector('body');
const bntStartRef = document.querySelector('[data-start]');
const bntStopRef = document.querySelector('[data-stop]');

let timerId = null;

bntStartRef.classList.add('button-switcher');
bntStopRef.classList.add('button-switcher');
// console.log(bntStartRef);
// console.log(bntStopRef);

bntStartRef.addEventListener('click', changeColor);
bntStopRef.addEventListener('click', stopColorChange);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor() {
    timerId = setInterval((() => {
        const backgroundColor = getRandomHexColor();
   bodyRef.style.backgroundColor = backgroundColor;  
        
    }), 1000);
    
    bntStartRef.disabled = !bntStartRef.disabled;
    bntStopRef.disabled = false;
    
};

function stopColorChange() {
    clearInterval(timerId);
    bntStartRef.disabled = false;
    bntStopRef.disabled = !bntStopRef.disabled;
};

