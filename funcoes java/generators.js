//symbols e iterators (iteradores sao interface)

//symbols = mareira de gerar um identificador unico

const uniqueId = Symbol();
console.log (uniqueId);


//mesmo com a mesma string de identificacao um nao é igual ao otro symbol
const uniqueId2 = Symbol("hello");
const uniqueId3 = Symbol("hello");

console.log (uniqueId2 === uniqueId3);

//o symbol pode ser usado para criar um obj, uma propriedade privado

const uniqueId4 = Symbol("cat");
const obj = {
    [uniqueId4]: "cat"
};

console.log(obj);

//well know symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag
//servem p add propriedades no symbol

/*
const obj = {
    values:[1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next:() => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj [Symbol.iterator]();

console.log(it.next());
*/

//Genrerators -> sao funções com pausa

function hi () {
    console.log("hi");
    console.log("From");
    console.log("function!");
};

hi()

//para conseguir pausar

function* hi () {
    console.log("hi");
    yield;
    console.log("From");
    yield;
    console.log("function!");
};

const it = hi()

console.log(it.next());
console.log(it.next());
console.log(it.next());

