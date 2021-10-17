window.onload = function () {
    var mostrar = window.document.getElementById('botao');
    mostrar.addEventListener('click', verificar);
}


function verificar() {
    var anoNascimento = window.document.getElementById('txtAno').value;
    var anoAtual = new Date().getFullYear();

    if (anoNascimento == 0 || anoNascimento > anoAtual) {
        alert('[ERRO]Verifique os dados e tente novamente!');
    } else {
        var idade = Number(anoAtual) - anoNascimento
        var sexo = window.document.getElementsByName('radsex');
        var mensagem = window.document.getElementById('msg');
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');

        if (sexo[0].checked) {
            sexo = 'Homem';

            if (idade >= 0 && idade < 12) {
                //Criança
                imagem.setAttribute('src', 'imagens/menino.png');
            } else if (idade < 24) {
                //Jovem
                imagem.setAttribute('src', 'imagens/jovem-homem.png');
            } else if (idade < 60) {
                //Adulto
                imagem.setAttribute('src', 'imagens/homem.png');
            } else {
                //Idoso
                imagem.setAttribute('src', 'imagens/idoso.png');
            }
        } else if (sexo[1].checked) {
            sexo = 'Mulher';

            if (idade >= 0 && idade < 12) {
                //Criança
                imagem.setAttribute('src', 'imagens/menina.png');
            } else if (idade < 24) {
                //Jovem
                imagem.setAttribute('src', 'imagens/jovem-mulher.png');
            } else if (idade < 60) {
                //Adulto
                imagem.setAttribute('src', 'imagens/mulher.png');
            } else {
                //Idoso
                imagem.setAttribute('src', 'imagens/idosa.png');
            }
        }
        mensagem.innerText = `Detectamos ${sexo} com ${idade} anos`;
        mensagem.appendChild(imagem);
    }
}
