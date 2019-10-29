/*
function sum (a,b) {
    return a + b;
}

console.log(sum(5, 5));
*/

//rest operator ...->rest operator =...
/*
function sum(...args) {
    return args.reduce((acc, value) => acc + value,0);
}
console.log(sum(5,5,5,2,3));
*/

/*
const multiply = (...args) => args.reduce((acc, value)=>acc*value,1);
console.log(multiply(5,5,5,2,3));
*/

//rest operator, spread operatos...
//strings, arrays, objects e objetos interáveis
//spread operator quebra os itens e repassa pra algum lugar

/*
const str = "digital innovation";
function logArgs(...args) {
    console.log(args);
}
logArgs(...str);
*/

/*
const arr = [1,2,3,4];
function logArgs(a,b,c) {
    console.log(a,b,c);
}
logArgs(...arr)

const arr2 = [5, 6, 7, ...arr];

const arr3 = [...arr2, ...arr, 0, 0, 0];
console.log (arr3);

const arrClone = [...arr];
console.log(arrClone);
*/

const obj = {
    test:123
};

//só pode usar em objetos iteráveis ou não iteranáveis para criar um obj novo
const obj2 = {
    ...obj,
    test2:"hello"
};
console.log(obj2);



