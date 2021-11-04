let cinema = ('cine house');
const catalogo = require('./database/catalogo.json')


function adicionarFilme(titulo,duracao,atores,anoLancamento,emCartas){
    const novoFilme ={
        codigo: catalogo.lenght,
        titulo,
        duracao ,
        atores,
        anoLancamento,
        emCartas
    }
    const novoTamanhoDoCatalogo = catalogo.push(novoFilme)
    console.log('Filme adicionado  com SUCESSO!, catalogo agora tem' +novoTamanhoDoCatalogo +'Filmes')
}

function verificaDuracao(filme,){
    return filme.duracao>2
}
function listaFilmesLongaDuracao(){
console.log(catalogo.filter(verificaDuracao))

}



adicionarFilme('picachu,2.0,[ "allysson"],2020,true')