//promise

const doSomethingPromise = new Promise((resolve, reject) => {
    function doSomething(callback){
    setTimeout(function() {
        //did something
     resolve ("first data");
    }, 1000);
}
});

console.log(doSomethingPromise);

const doOtherThingPromise = new Promise ((resolve, reject) =>{
    setTimeout(function() {
        //did otherthing
        resolve ("second data");
    }, 1000);
})

console.log(doOtherThingPromise);

doSomethingPromise()
.then(data=> {
    console.log(data);
    return doOtherThingPromise();
})
.then(data2=>console.log(data2))
.catch(error =>console.log("Ops", error));

//A promise pode ser:
//pedding, fullfilled, reject
//pendente, terminou de executar, caso de erro

//callbacks
/*
function doSomething(callback){
    setTimeout(function() {
        //did something
        callback("first data");
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did othersomething
        callback("second data");
    },1000);
}
*/

/*
function doAll(){
    doSomething(function(data) {
        var processedData = data.split("");

        doOtherThing(function(data2) {
         var processedData2 = data2.split("");

         setTimeout (function() {
             console.log(processedData, processedData2)
         }, 1000);
        });
    });
}

doAll()
*/