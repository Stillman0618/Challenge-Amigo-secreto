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
    
    return participantes.map((persona, i) => ({ participante: persona, amigoSecreto: mezclados[i] }));
}

// Función para mostrar un solo nombre de la asignación
function mostrarAmigoSecreto(nombre) {
    const asignaciones = asignarAmigoSecreto();
    const asignacion = asignaciones.find(asign => asign.participante === nombre);
    if (asignacion) {
        console.log(`${nombre}, tu amigo secreto es: ${asignacion.amigoSecreto}`);
    } else {
        console.log("Nombre no encontrado en la lista de participantes.");
    }
}

// Ejemplo de uso
agregarParticipante("Carlos");
agregarParticipante("Ana");
agregarParticipante("Luis");
agregarParticipante("María");

const resultado = asignarAmigoSecreto();
mostrarAmigoSecreto("Carlos");