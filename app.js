const participantes = [];

// Función para agregar participantes
function agregarParticipante(nombre) {
    if (nombre.trim() === "") {
        console.log("Por favor, ingrese un nombre válido.");
        return;
    }
    if (!participantes.includes(nombre)) {
        participantes.push(nombre);
        console.log(`${nombre} ha sido agregado.`);
    } else {
        console.log("Nombre ya existe.");
    }
}

// Función para mezclar y asignar amigos secretos
function asignarAmigoSecreto() {
    if (participantes.length < 2) {
        console.log("Se necesitan al menos 2 participantes.");
        return;
    }
    
    let mezclados = [...participantes];
    do {
        mezclados.sort(() => Math.random() - 0.5);
    } while (mezclados.some((persona, i) => persona === participantes[i]));
    
    let asignaciones = participantes.map((persona, i) => ({ participante: persona, amigoSecreto: mezclados[i] }));
    
    console.log("Asignaciones de Amigo Secreto:", asignaciones);
    return asignaciones;
}

// Ejemplo de uso
agregarParticipante("Carlos");
agregarParticipante("Ana");
agregarParticipante("Luis");
agregarParticipante("María");

const resultado = asignarAmigoSecreto();
