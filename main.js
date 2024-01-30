const form = document.getElementById('form-nomeContato');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value} </td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputNumero.value = '';
})
