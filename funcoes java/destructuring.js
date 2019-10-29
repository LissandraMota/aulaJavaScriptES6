var arr = ["apple", "banana", "orange"];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//muito literal e pode ser muito extenso

//Destructuring assignment
var [apple2, banana2, orange2] = ["apple", "banana", "orange"];
console.log (apple, apple2);

var arr = ["apple", "banana", "orange", ["tomato"]];
//var apple = arr[0]; 
//var banana = arr[1];
//var orange = arr[2];
//var tomato = arr[3][0];
//dessa forma vai ficando muito + complexo e extenso, com o destru...

var [apple2, banana2, orange2,[tomato2]] = ["apple", "banana", "orange", ["tomato"]];

console.log(tomato2);

//o que o destructuring fez com arrays pode ser feito com objeto

var obj = {
    name: "Lissandra"
}
var name =obj.name;
console.log(name);

//com destructuring

var obj = {
    name: "Lissandra"
}
var name = obj;
console.log(name);

//pode utlizar o detructuring na hora de definir variáveis, na lista de argumntos de uma função

//function sem destructuring

function sum (arr) {
    return arr[0] + arr[1]
}

console.log(sum([5, 5]));

//function com destructing
/*
function sum (arr) {
    var a = arr [0]
    var b = arr [1]
    return a + b;
}
*/

function sum ([a, b]) {
    return a + b;
}

console.log (sum([12, 5]));
