/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
    this.a = a;
    this.b = b;
 
    this.sum = () => {
        return this.a + this.b;
    };
    this.substr = () => {
        return this.a - this.b;
    };
    this.multiply = () => {
        return this.a * this.b;
    };
    this.divide = () => {
        return this.a / this.b;
    };
}

const toCount = new Calculator(2, 4);

console.log(toCount.sum());
console.log(toCount.substr());
console.log(toCount.multiply());
console.log(toCount.divide());