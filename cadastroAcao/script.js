const $inpAcao          = qs('#inpAcao')
const $inpDataCompra    = qs('#inpDataCompra')
const $inpQtd           = qs('#inpQtd')
const $inpValor         = qs('#inpValor')
const $btnCadastrar     = qs('#btnCadastrar')
const $selectAcao       = qs('#selAcao')

const $form = qs('#novoItem')

let itemLocal = JSON.parse(localStorage.getItem('item')) || []

optionsAcoes()
$(document).ready(function() {
    $('#selAcao').select2();
});

$form.onsubmit = (e) => {
    e.preventDefault()

    const acao = qs('#selAcao')
    const dadoAcao = qs('#select2-selAcao-container')
    const dataCompra = e.target.elements['inpDataCompra']
    const quantidade = e.target.elements['inpQtd']
    const valor = e.target.elements['inpValor']

    const acaoAtual = {
        'acao': acao.value,
        'dataCompra': dataCompra.value,
        'quantidade': quantidade.value,
        'valor': valor.value.replace(/[^0-9]/g,'')
    }

    itemLocal.push(acaoAtual)

    localStorage.setItem('item', JSON.stringify(itemLocal))

    acao.value = ''
    dadoAcao.setAttribute('title', '')
    dadoAcao.innerText = ''
    dataCompra.value = ''
    quantidade.value = ''
    valor.value = ''
}

function optionsAcoes(){
    for(let i in obj){
        let nomeAcaoSigla = `${obj[i].sigla} - ${obj[i].nome}`
        carregarSelect(obj[i].sigla, nomeAcaoSigla, $selectAcao)
    }
}

let valorEnviadoFormat = 0
$inpValor.oninput = (e) =>{
    if(!isNaN(e.data) && e.data != null){
        valorEnviadoFormat += e.data
        $inpValor.value = formatReal(valorEnviadoFormat)
    }else if(isNaN(e.data) && e.inputType != 'deleteContentBackward'){
        $inpValor.value = formatReal(valorEnviadoFormat)
    }
    else{
        $inpValor.value = '' 
        valorEnviadoFormat = ''
    }
}
$inpValor.onchange = () => valorEnviadoFormat = 0