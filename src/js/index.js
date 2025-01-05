const button = document.getElementById('botao-gerador-numero');
let numeroVideo = 0;

button.addEventListener('click', () => {
    const videos = document.querySelectorAll(".video");
    esconderVideoAtivo(); // Esconde o vídeo atualmente ativo
    generateRandomNumber(videos.length); // Gera o número do vídeo
    mostrarVideoAleatorio(videos); // Exibe o vídeo correspondente
});

function esconderVideoAtivo() {
    const videoAtivo = document.querySelector(".ativo");
    if (videoAtivo) {
        videoAtivo.classList.remove("ativo"); // Remove a classe 'ativo' do vídeo visível
    }
}

function generateRandomNumber(totalVideos) {
    let novoNumero;
    do {
        novoNumero = Math.floor(Math.random() * totalVideos); // Gera um número aleatório
    } while (novoNumero === numeroVideo); // Repete até que o número seja diferente do atual
    numeroVideo = novoNumero; // Atualiza o número do vídeo ativo
}

function mostrarVideoAleatorio(videos) {
    if (videos[numeroVideo]) {
        videos[numeroVideo].classList.add("ativo"); // Adiciona a classe 'ativo' ao vídeo escolhido
    }
}