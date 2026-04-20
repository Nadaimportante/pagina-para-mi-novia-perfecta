// Modal
function abrirModal(img, texto) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-texto").innerText = texto;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Popup
function mostrarMensaje() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}

function toggleMusic() {
    let musica = document.getElementById("musica");

    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}setInterval(() => {
    const contenedor = document.getElementById("corazones");
    const corazon = document.createElement("div");

    corazon.classList.add("corazon");
    corazon.innerHTML = "💜";

    // posición aleatoria en TODA la pantalla
    corazon.style.top = Math.random() * 100 + "vh";
    corazon.style.left = Math.random() * 100 + "vw";

    // tamaño aleatorio
    corazon.style.fontSize = (Math.random() * 25 + 10) + "px";

    contenedor.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 4000);

}, 300);

function cargarVideo(elemento) {
    elemento.innerHTML = `
        <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/FhAgwtm6ceA?si=fKbVFpzUQz6UTHZA&autoplay=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
    `;
}