const button = document.getElementById('botao-gerador-numero');
let numeroVideo = 0;

button.addEventListener('click', () => {
    const videos = document.querySelectorAll(".video");
    esconderVideoAtivo();
    generateRandomNumber(videos.length);
    mostrarVideoAleatorio(videos);
});

function esconderVideoAtivo() {
    const videoAtivo = document.querySelector(".ativo");
    if (videoAtivo) {
        const iframe = videoAtivo.querySelector("iframe");
        if (iframe) {
            const srcOriginal = iframe.src;
            iframe.src = "";
            iframe.src = srcOriginal;
        }
        videoAtivo.classList.remove("ativo");
    }
}

function generateRandomNumber(totalVideos) {
    let novoNumero;
    do {
        novoNumero = Math.floor(Math.random() * totalVideos);
    } while (novoNumero === numeroVideo);
    numeroVideo = novoNumero;
}

function mostrarVideoAleatorio(videos) {
    if (videos[numeroVideo]) {
        videos[numeroVideo].classList.add("ativo");
    }
}
