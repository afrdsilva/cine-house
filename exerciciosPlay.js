let dobro = v1 =>v1*2;
let triplo = v1 =>v1*3;
 function  aplicar  (v1,callbacks){
    return callbacks(v1)
}

console.log(aplicar(2,dobro))

function adicionarHttp(url) {
    
    resultado = 'http://'+url

    return resultado;
}

const  processar = ( lista,adicionarHttp)=>{
   const retorno = []
   for (let i=0; i<lista.length;i++){
       retorno.push (adicionarHttp(lista[i]))
   }
   return retorno 
   }
   




//console.log(processar(['google.com','globo.com'],adicionarHttp))

//let carro = {
  //  nome: 'fox',
    //ano: 2011
//}

//for (let prop in carro){
 //   console.log(carro[prop])
//}

//let series = [ "carro", "moto","navio"];

//for (let valor of series){
  //  console.log(valor)
//}

//let frase = "Essa semana vou no colearning";

 //for (let letra of frase){
  //  console.log(letra)
 //}

