const filme = {
    codigo: 120,
    titulo: 'Filme Um',
    duracao: '2',
    atores:  ['Allysson', 'Erika', 'Arthur', 'Esther'],
    anoLancamento: 2016,
    emCartas: true
}

const MeuJson = JSON.stringify(filme)

console.log(MeuJson)