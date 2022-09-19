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


async function buscarDados(){
  let arrCompleto = []

  for(let item of valorLista){
    let dados = []
    let acaoName = item.acao.toUpperCase()
    let valorAtual = await retornarValorAtual(acaoName)
    let valorComprado = parseFloat(formatReal(item.valor).replace(/[^0-9]/g,'')/100) * item.quantidade
    let valorPerdGan = parseFloat((parseFloat(valorAtual.replace(',','.')) - (valorComprado/item.quantidade)) * parseInt(item.quantidade)).toFixed(2)
    let percPerdGan = parseFloat((((valorComprado + parseFloat(valorPerdGan))/valorComprado)-1)*100).toFixed(2)
    console.log(valorComprado)
    console.log(parseFloat(valorPerdGan))

    dados.push(acaoName)
    dados.push(formataData(item.dataCompra))
    dados.push(item.quantidade)
    dados.push(`${formatReal(item.valor)}`)
    dados.push(`R$ ${valorAtual}`)
    // dados.push(`${formatReal(item.valor)}`)
    dados.push(`${percPerdGan} %`)
    dados.push(`R$ ${valorPerdGan}`)
    arrCompleto.push(dados)
  }

  adicionarTabela(arrCompleto)
}

function formataData(date){
  let newDate = `${date.substr(8, 2)}/${date.substr(5, 2)}/${date.substr(0, 4)}`
  return newDate
}

buscarDados()

// async function retornarValorAtual(acaoName){
//   const urlApi = `https://api.hgbrasil.com/finance/stock_price?key=3e773a06&symbol=${acaoName}`
//   return fetch(urlApi)
//   .then(async response => {
//     return response.json().then(data => {
//       return data.results[acaoName].price.toFixed(2).toString().replace(".", ",")
//     })
//   })
//   .catch(function(err) { 
//     console.error(err);
//   });
// }
