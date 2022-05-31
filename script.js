const html = document.querySelector('html');
const cpOne = document.querySelector('#cpOne');
const cpTwo = document.querySelector('#cpTwo');
const invertEl = document.querySelector('#invert');
const radialEl = document.querySelector('#radial');
const linearEl = document.querySelector('#linear');
const conicEl =  document.querySelector('#conic');
const angleValEl = document.querySelector('#angleValue');
const angleEl =  document.querySelector('.angle');

let cssValueEl = document.querySelector('#cssValue');
let gradType = 'linear-gradient';
let rotationVal = 0;

cpOne.addEventListener('input', () => { colorChange(rotationVal) });
cpTwo.addEventListener('input', () => { colorChange(rotationVal) });
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
    colorChange(rotationVal);
}

function conicGrad() {
    gradType = 'conic-gradient';
    colorChange(rotationVal);
}

function colorChange(rotationVal = 0) {
    if (gradType == 'linear-gradient'){
        html.style.background = `${gradType}(${rotationVal}deg, ${cpOne.value}, ${cpTwo.value})`;
    } else if (gradType == 'conic-gradient'){
        html.style.background = `${gradType}(from ${rotationVal}deg, ${cpOne.value}, ${cpTwo.value})`;
    } else if (gradType == 'radial-gradient'){
        html.style.background = `${gradType}(${cpOne.value}, ${cpTwo.value})`;
    }
    cssSnippet();
}

function invertColors(){
    cpTwoTemp = cpTwo.value;
    cpTwo.value = cpOne.value;
    cpOne.value = cpTwoTemp;
    colorChange(rotationVal);
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
            rotationVal = displayVal;
            colorChange(displayVal);
        }
    } else if (e == angleEl) {
        let rotation = angleEl.value;
        if (rotation != null && rotation != undefined) {
            angleValEl.value = rotation;
            rotationVal = rotation;
            colorChange(rotation);
        }
    }
}