//Enchanced object literals
/*
//foarmas de atribuir valor para propriedade e métodos
var obj={
    prop1:"digital innovation one"
};
console.log(obj);

var prop2 = "Digital"
var obj = {
    prop2:prop2
};
console.log(obj);
*/

var propName="test";
var obj = {};
obj[propName] = "prop value";
console.log(obj);

//ou
var propName = "lis";
var obj ={
    [propName + "ssandra"]:"prop value"
};
console.log(obj);