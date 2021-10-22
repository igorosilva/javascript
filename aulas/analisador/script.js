window.onload = function () {
    var addBtn = window.document.getElementById('addVal');
    addBtn.addEventListener('click', addValores);

    var finalBtn = window.document.getElementById('finalizar');
    finalBtn.addEventListener('click', finalizar);
}


let valores = [];

function addValores() {
    let num = window.document.getElementById('txtNum');
    let lista = window.document.getElementById('lista');

    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value));
        let linhas = document.createElement('option');
        linhas.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(linhas);
    } else {
        alert('Valor inválido ou já encontrado na Lista');
    }
    num.value = '';
    num.focus();
}

function isNumber(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true;
    } else {
        return false;
    }
}

function finalizar() {
    let resultado = window.document.getElementById('resultado');
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let menorValor = valores[0];
        let maiorValor = valores[0];
        let soma = 0;
        let media = 0;

        for (let i in valores) {
            if (valores[i] > maiorValor) {
                maiorValor = valores[i];
            } else if (valores[i] < menorValor) {
                menorValor = valores[i];
            }
            soma += valores[i];
        }

        media = soma / total;

        resultado.innerHTML += '';
        resultado.innerHTML += `<p>Ao todos, temos ${total} números cadastrados.`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maiorValor}`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menorValor}`;
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}`;
        resultado.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}`;
    }
}

function maiorValor(numero, lista) {
    let maior = 0;


}

function menorValor(numero, lista) {

}

function calcularSoma(lista) {

}

function calcularMedia() {

}