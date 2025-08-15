let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(amigo);

    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML = listaAmigos.innerHTML + '<li>' + amigos[i] + '</li>';
    }
}

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(amigo);

    document.getElementById('amigo').value = '';
    
    atualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;
}
