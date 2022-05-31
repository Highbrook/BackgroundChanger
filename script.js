const html = document.querySelector('html');
const cpOne = document.querySelector('#cpOne');
const cpTwo = document.querySelector('#cpTwo');
const invertEl = document.querySelector('#invert');
const radialEl = document.querySelector('#radial');
const linearEl = document.querySelector('#linear');
const conicEl =  document.querySelector('#conic');
const angleValEl = document.querySelector('#angleValue');
const angleEl =  document.querySelector('.angle');
//const pointerEl =  document.querySelector('.pointer');
//const pointerDockEl = document.querySelector('.pointerDock')

let cssValueEl = document.querySelector('#cssValue');
let gradType = 'linear-gradient';

cpOne.addEventListener('input', colorChange);
cpTwo.addEventListener('input', colorChange);
invertEl.addEventListener('click', invertColors);
radialEl.addEventListener('click', radialGrad);
linearEl.addEventListener('click', linearGrad);
conicEl.addEventListener('click', conicGrad);
angleValEl.addEventListener('input', () => { angle(angleValEl) });
angleEl.addEventListener('input', () => { angle(angleEl) });


function radialGrad() {
    gradType = 'radial-gradient';
    colorChange();
}

function linearGrad() {
    gradType = 'linear-gradient';
    colorChange();
}

function conicGrad() {
    gradType = 'conic-gradient';
    colorChange();
}

function colorChange() {
    html.style.background = `${gradType}(${cpOne.value}, ${cpTwo.value})`;
    cssSnippet();
    console.log(cpOne.value, cpTwo.value, gradType);
}

function invertColors(){
    cpTwoTemp = cpTwo.value;
    cpTwo.value = cpOne.value;
    cpOne.value = cpTwoTemp;
    colorChange(gradType);
}

function cssSnippet(){
    cssValueEl.value = `background: ${html.style.background}`;
}

function angle(e) {
    if (e == angleValEl)
    {
        let displayVal = angleValEl.value;
        if (displayVal != null && displayVal != undefined) {
            angleEl.value = displayVal;
            console.log(displayVal);
        }
    } else if (e == angleEl) {
        let rotation = angleEl.value;
        if (rotation != null && rotation != undefined) {
            angleValEl.value = rotation;
            console.log(rotation);
        }
    }
}