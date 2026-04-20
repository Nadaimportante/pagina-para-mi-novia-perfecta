function abrirPopup() {
    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

// Verificación tipo IF
function verificar() {
    let pass = document.getElementById("password").value;

    if (pass === "15/3") {
        window.location.href = "PAG2.html"; // página real
    } else {
        document.getElementById("error").innerText = "Contraseña incorrecta 💔";
    }
}