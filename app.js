// Array que almacenará los nombres de los amigos
const amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    // Validación si el nombre está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array si no está repetido
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarAmigos();
    } else {
        alert("Este nombre ya está en la lista.");
    }

    // Limpiar el campo de entrada
    nombreInput.value = "";
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;
}


