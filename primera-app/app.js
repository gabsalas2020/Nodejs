//ES5 - Variables
/*var nombre = "Gabriel";
console.log(nombre);
nombre = "Pablo";
console.log(nombre);
//ES6+ - Variables
const nombre6 = "Luis";
let edad = 35;
console.log(nombre6);
console.log(edad);
edad = 40;
console.log(edad);*/

// Funciones flecha
//Funciones en ES5
/*const years = [2000,2005,2008,2012];
var edad5 = years.map(function(elem){
    return 2019-elem;
})
console.log(edad5);

//Funciones en ES6 de tipo flecha
let edad6 = years.map(el => 2019-el)
console.log(edad6);*/

//Funciones CallBack
/*function Sumar(num1, num2, CallBack){
    let resultado = num1+num2;
    CallBack(resultado);
}
function Resultado(res){
    console.log(res)
}
Sumar(5,8,Resultado);
setTimeout(() => console.log('Esta funcion se vera en 3 segundos'),3000)*/
//Promesa -> acorta el callback
//const mensaje = new Promise((resolve, reject) => {
  function mensaje(){
      return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(false)
        resolve('Esta funcion se vera en 3 segundos')
        else 
        reject('Hubo un error')
    },3000);
});
}
async function llamadaAsync(){
console.log('Llamada... ')
const resultado = await mensaje();
return resultado;
}
llamadaAsync().then( x => console.log(x)).catch(e => console.log(e));
/*mensaje
.then (msj => {
    console.log(msj);
})
.catch (error => {
    console.log(error)
})*/
