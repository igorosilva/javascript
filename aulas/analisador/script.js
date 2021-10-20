window.onload = function () {
    var addBtn = window.document.getElementById('addVal');
    addBtn.addEventListener('click', addValores);

    var finalBtn = window.document.getElementById('finalizar');
    finalBtn.addEventListener('click', finalizar);
}

function addValores() {
    let num = window.document.getElementById('txtNum');
    let lista = window.document.getElementById('lista');
    let valores = [];

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let linhas = document.createElement('option');
        linhas.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(linhas);
    } else {
        alert('Valor inválido ou já encontrado na Lista');
    }
}

function isNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true;
    } else {
        return false;
    }
}

function finalizar() {
    let resultado = window.document.getElementById('resultado');
}