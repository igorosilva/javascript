function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = "imagens/manha.jpg"
        document.body.style.backgroundColor = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = "imagens/tarde.jpg"
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //Noite
        img.src = "imagens/noite.jpg"
        document.body.style.backgroundColor = '#515154';
    }
}