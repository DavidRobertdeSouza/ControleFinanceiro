const $inpAcao          = qs('#inpAcao')
const $inpDataCompra    = qs('#inpDataCompra')
const $inpQtd           = qs('#inpQtd')
const $inpValor         = qs('#inpValor')
const $btnCadastrar     = qs('#btnCadastrar')
const $selectAcao       = qs('#editable-select')

const $form = qs('#novoItem')

let itemLocal = JSON.parse(localStorage.getItem('item')) || []

optionsAcoes()
$('#editable-select').editableSelect();

$form.onsubmit = (e) => {
    e.preventDefault()

    const acao = e.target.elements['inpAcao']
    const dataCompra = e.target.elements['inpDataCompra']
    const quantidade = e.target.elements['inpQtd']
    const valor = e.target.elements['inpValor']

    const acaoAtual = {
        'acao': acao.value,
        'dataCompra': dataCompra.value,
        'quantidade': quantidade.value,
        'valor': valor.value
    }

    localStorage.setItem('item', JSON.stringify(acaoAtual))

    acao.value = ''
    dataCompra.value = ''
    quantidade.value = ''
    valor.value = ''

    console.log(acaoAtual)

    console.log(e)
    console.log('sa')
}

function optionsAcoes(){
    console.log(obj)
    for(let i in obj){
        let nomeAcaoSigla = `${obj[i].sigla} - ${obj[i].nome}`
        carregarSelect(obj[i].sigla, nomeAcaoSigla, $selectAcao)
    }
}



