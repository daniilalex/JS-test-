/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const outPut = document.querySelector('#output');

function getModel() {
    fetch('cars.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayModel(data);
        });
}
getModel();


//display object
function displayModel(arr) {

    arr.forEach((item) => { //make a loop throw the brands and draw them
        const div = document.createElement('div');
        div.classList.add('data');

        const ul = document.createElement('ul');
        ul.classList.add('ul-list');

        const dataHeader = document.createElement('h3');
        dataHeader.classList.add('data-login');
        dataHeader.textContent = item.brand;


        item.models.forEach((model) => { //make a loop throw the models and draw them
            // const newarr = item.models;
            const li = document.createElement('li');
            li.classList.add('list');
            // model = newarr.slice(0, 5);
            li.textContent = model;
            ul.append(li);

        });

        div.append(dataHeader, ul);
        outPut.append(div);
    });

};