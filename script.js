const html = document.querySelector('html');
const cpOne = document.querySelector('#cpOne');
const cpTwo = document.querySelector('#cpTwo');
const invertEl = document.querySelector('#invert');

cpOne.addEventListener('change', colorChange);
cpTwo.addEventListener('change', colorChange);
invertEl.addEventListener('click', invertColors);


function colorChange() {
    html.style.background = `linear-gradient(${cpOne.value}, ${cpTwo.value})`;
    console.log(cpOne.value, cpTwo.value);
}

function invertColors(){
    cpTwoTemp = cpTwo.value;
    cpTwo.value = cpOne.value;
    cpOne.value = cpTwoTemp;
    colorChange();
}