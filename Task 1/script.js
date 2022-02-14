/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector('form');
const input = document.querySelector('#search');
const outPut = document.querySelector('#output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputVal = input.value;
    input.value = '';

    const lb = document.createElement('h2');
    g = document.createElement('h2');
    oz = document.createElement('h2');

    lb.innerHTML = `Pounds: ${inputVal * 2.2046}`;
    g.innerHTML = `Gram: ${inputVal / 0.001}`;
    oz.innerHTML = `Oz: ${inputVal * 35.274}`;

    outPut.append(lb, g, oz);
    clearDisplay();
});

function clearDisplay() {
    setTimeout(() => {
        outPut.textContent = '';
    }, 7000);
}



