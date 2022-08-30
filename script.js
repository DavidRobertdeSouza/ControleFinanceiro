const $inpAcao          = qs('#inpAcao')
const $inpDataCompra    = qs('#inpDataCompra')
const $inpQtd           = qs('#inpQtd')
const $inpValor         = qs('#inpValor')
const $btnCadastrar     = qs('#btnCadastrar')

let dados = []

$btnCadastrar.onclick = cadastrarDados

function cadastrarDados(){
    dados.push($inpAcao.value)
    dados.push($inpDataCompra.value)
    dados.push($inpQtd.value)
    dados.push($inpValor.value)
    console.log(dados)
    dados = []
}