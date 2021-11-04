const sites = [
{
   url:  'www.google.com'
}   ,
{
    url :'www.twiter.com', 
}, 
{
    url :'www.facebook.com', 
}, 
{
    url :'www.yahoo.com', 
} 
]
  const numero = [2,4,7,8,5,66,7,88,99]

  function filtraUrlCurta(url){
      const temMenosDeQuinzeCaracteres = url.length <= 15
      console.log('filtro', url, temMenosDeQuinzeCaracteres)
      return temMenosDeQuinzeCaracteres
  }
  
function adicionarhttp(url){
    return 'http://' + url
}
console.log('antes',sites)


  //const novoArray = sites.map(adicionarhttp)
  //console.log('depois',novoArray)

 // const novoSites= sites.filter(filtraUrlCurta)
  //console.log(sites,novoSites)

function somaArray(acumulador,item){
    console.log('soma', acumulador,item)
    return acumulador + item;
}

function adicionaIdioma(sites){
    sites.adicionaIdioma = 'portugues'
}

sites.forEach(adicionaIdioma)
//const  resu = numero.reduce(somaArray)
//console.log(resu)