const $inpAcao          = qs('#inpAcao')
const $inpDataCompra    = qs('#inpDataCompra')
const $inpQtd           = qs('#inpQtd')
const $inpValor         = qs('#inpValor')
const $btnCadastrar     = qs('#btnCadastrar')
const $selectAcao       = qs('#selAcao')

const $buttonTheme      = qs('#buttonTheme')
const $body             =qs('body')


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
    showNotification('Ação cadastrada!', 'success', 3500)

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
        if($inpValor.value = ''){
            return
        }
        $inpValor.value = formatReal(valorEnviadoFormat)
    }
    else{
        $inpValor.value = '' 
        valorEnviadoFormat = ''
    }
}
$inpValor.onchange = () => valorEnviadoFormat = 0


$buttonTheme.onclick = () => {
    const $divCadastro = qs('.divCadastro')
    const $labelCadastro = qsa('.labelCadastro')
    const $inputCadastro = qsa('.inputCadastro')
    const $select2Selection = qsa('.select2-selection')
    const $select2Dropdown = qsa('.select2-dropdown') 
    const $select2SelectionRendered = qs('#select2-selAcao-container') 
    const $btnCadastrar = qs('.btnCadastrar')
    const $header = qs('header')
    const $buttonHeader = qsa('.buttonTheme')

    $body.classList.toggle('body-dark')
    $divCadastro.classList.toggle('divCadastro-dark')
    for(item of $labelCadastro){
        item.classList.toggle('labelCadastroDark')
    }
    for(item of $inputCadastro){
        item.classList.toggle('inputDark')
    }
    for(item of $select2Selection){
        item.classList.toggle('inputDark')
    }
    for(item of $select2Dropdown){
        item.classList.toggle('inputDark')
    }
    $select2SelectionRendered.classList.toggle('select2-selection__renderedDark')
    $btnCadastrar.classList.toggle('btnCadastrarDark')

    if($buttonTheme.classList.value.includes('fa-moon')){
        $buttonTheme.classList.remove('fa-moon')
        $buttonTheme.classList.add('fa-sun')
    }else{
        $buttonTheme.classList.add('fa-moon')
        $buttonTheme.classList.remove('fa-sun')
    }

    $header.classList.toggle('headerDark')

    for(item of $buttonHeader){
        item.classList.toggle('buttonThemeDark')
    }   
}