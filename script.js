const cpOne = document.querySelector('#cpOne');
const cpTwo = document.querySelector('#cpTwo');

console.log(cpOne.value, cpTwo.value);

cpOne.addEventListener('change', () => {
    console.log("Color changed");
});

cpTwo.addEventListener('change', () => {
    console.log("Color changed");
});
