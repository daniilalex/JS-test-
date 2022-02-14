/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';
const showUser = document.querySelector('#btn');
const outPut = document.querySelector('#output');
showUser.addEventListener('click', (e) => {
    e.preventDefault();
    const pText = document.querySelector('#message');
    pText.textContent = '';
    getData();
});

function getData() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            displayUser(data);
        });

}
function displayUser(arr) {

    arr.forEach((element, i) => {
        const div = document.createElement('div');
        div.classList.add('data');

        const dataHeader = document.createElement('h3');
        dataHeader.classList.add('data-login');
        dataHeader.textContent = `${i + 1}. The Login is: ${element.login}`;

        const dataUrl = document.createElement('img');
        dataUrl.classList.add('data-url');
        dataUrl.src += `${element.avatar_url}`;

        div.append(dataHeader, dataUrl);
        outPut.append(div);

    });
}