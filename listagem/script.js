const $bodyTable = qs('#bodyTable')
const valorLista = JSON.parse(localStorage.getItem('item'))


function adicionarTabela(valores){
  for(let linha of valores){
    let novaLinha = ce('tr')
    for(let item of linha){
      let novoItem = ce('td')

      novoItem.innerHTML = item
      novaLinha.appendChild(novoItem)
    }
    $bodyTable.appendChild(novaLinha)
  }
}


function buscarDados(){
  let arrCompleto = []

  for(let item of valorLista){
    let dados = []
    dados.push(item.acao.toUpperCase())
    dados.push(formataData(item.dataCompra))
    dados.push(item.quantidade)
    dados.push(`R$ ${item.valor}`)
    dados.push(`R$ ${item.acao}`)
    dados.push(`${item.acao} %`)
    dados.push(`R$ ${item.acao}`)
    arrCompleto.push(dados)
  }

  adicionarTabela(arrCompleto)
}

function formataData(date){
  let newDate = `${date.substr(8, 2)}/${date.substr(5, 2)}/${date.substr(0, 4)}`
  return newDate
}

buscarDados()
