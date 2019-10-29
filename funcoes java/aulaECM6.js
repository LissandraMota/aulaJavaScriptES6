//fetch é um stream
//fetch("link, dado")
//.then(responseStream =>{
//if (respondeStream.json(); 
//} else{throw new error("request error");
//}
//}) .then(data =>{
     //   console.log(data);
// })
//.catch(err=>{
    //console.log("Erros: ", err)
//});


//ES7 - Async/Await

/*
const simpleFunc = async () =>{
    return 12345;
};

console.log(simpleFunc());
*/

const asyncTimer = () => new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(12345);
    },1000);
});
const simpleFunc = async () => {
    const data =await asyncTimer();
    return data;
};
simpleFunc()
.then(data =>{console.log(data);
})
.catch(err =>{console.log(err);
});

//EventEmitter

const EventEmitter = require("events");
const emiter = new EventEmitter();
emiter.on("user logged", data =>{
    console.log(data);
});
emiter.emit("user logged",{user:"Lissandra"});

//pode extender criando uma class
