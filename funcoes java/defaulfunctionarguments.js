function multiply (a,b) {
    return a*b;
}

console.log(multiply(5, 5))

//utilizando o igual após o parametro eu consigo atribuir valor padrao->(a,b=1); funciona com todos os paramtros

//lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}
function multiply(a,b = randomNumber()){
    return a*b;
}
console.log (multiply(5));
