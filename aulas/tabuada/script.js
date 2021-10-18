window.onload = function () {
    var botao = window.document.getElementById('btnGerar');
    botao.addEventListener('click', gerarTabuada);
}

function gerarTabuada() {
    var valor = window.document.getElementById('txtNum').value;
    var tabuada = window.document.getElementById('tabuada');

    if (valor == '') {
        alert('Por favor, digite um número')
    } else {
        tabuada.innerHTML = '';
        for (var i = 0; i <= 10; i++) {
            var multiplicacao = valor * i;
            var item = document.createElement('option');
            item.value = i;
            item.text = `${valor} X ${i} = ${multiplicacao}`;
            tabuada.appendChild(item);
        }
    }
}
