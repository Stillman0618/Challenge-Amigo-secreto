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

// Función para asignar amigos secretos
function asignarAmigoSecreto() {
    if (participantes.length < 2) {
        console.log("Se necesitan al menos 2 participantes.");
        return;
    }

    let mezclados = [];
    // Mezclamos los participantes de forma simple, sin usar algoritmos complejos
    while (mezclados.length < participantes.length) {
        let indiceAleatorio = Math.floor(Math.random() * participantes.length);
        let participante = participantes[indiceAleatorio];
        if (!mezclados.includes(participante)) {
            mezclados.push(participante);
        }
    }

    // Asignamos amigos secretos asegurándonos de que no se asigne a sí mismo
    let asignaciones = [];
    for (let i = 0; i < participantes.length; i++) {
        let participante = participantes[i];
        let amigoSecreto;
        
        // Evitamos que una persona se asigne a sí misma
        do {
            let indiceAleatorio = Math.floor(Math.random() * participantes.length);
            amigoSecreto = mezclados[indiceAleatorio];
        } while (amigoSecreto === participante);

        asignaciones.push({ participante: participante, amigoSecreto: amigoSecreto });
    }

    return asignaciones;
}

// Función para mostrar el amigo secreto de un participante
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

// Mostrar el amigo secreto de Carlos
mostrarAmigoSecreto("Carlos");
