window.onload = function () {
    var botao = window.document.getElementById('btnContar');
    botao.addEventListener('click', contar);
}

function contar() {
    var inicio = inicio = window.document.getElementById('txtInicio').value;
    var fim = window.document.getElementById('txtFim').value;
    var intervalo = window.document.getElementById('txtIntervalo').value;
    var texto = window.document.getElementById('mensagem');

    if (inicio == '' || fim == '' || intervalo == '' || (intervalo > fim && fim > inicio)) {
        alert('[ERRO]Dados inválidos!')
        texto.innerHTML = 'Impossível contar!'
    } else {
        if (intervalo < 0) {
            intervalo *= (-1);
            alert(`Intervalo inválido! Será considerado igual à "${intervalo}"`);
        } else if (intervalo == 0) {
            alert('Intervalo inválido! Será considerado igual à "1"');
            intervalo = 1;
        }

        if (inicio < fim) {
            texto.innerHTML = 'Contando:';
            for (var i = Number(inicio); i <= Number(fim); i += Number(intervalo)) {
                texto.innerHTML += `${i} \u{1F449} `;
            }
        } else {
            for (i = inicio; i >= fim; i -= intervalo) {
                texto.innerHTML += `${i} \u{1F449} `;
            }
        }
        texto.innerHTML += `\u{1F3C1}`;
    }
}