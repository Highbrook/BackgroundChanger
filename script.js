const cpOne = document.querySelector('#cpOne');
const cpTwo = document.querySelector('#cpTwo');
const html = document.querySelector('html');

cpOne.addEventListener('change', colorGrab);

cpTwo.addEventListener('change', colorGrab);

function colorGrab() {
    html.style.background = `linear-gradient(${cpOne.value}, ${cpTwo.value})`;
    console.log(cpOne.value, cpTwo.value);
}

