/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const div = document.querySelector('#btn__element');
const outPut = document.querySelector('#btn__state');
let newCount = 0;
div.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.type);
    newCount += 1;
    outPut.innerHTML = newCount;

});