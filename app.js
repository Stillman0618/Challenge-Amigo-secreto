<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo de Amigos Secretos</title>
</head>
<body>
    <h2>Sorteo de Amigo Secreto</h2>

    <!-- Botón para realizar el sorteo -->
    <button onclick="sorteoAmigo()">Sortea un Amigo Secreto</button>

    <!-- Área donde se mostrará el amigo sorteado o un mensaje de error -->
    <p id="resultado">Haz clic en el botón para realizar el sorteo.</p>

    <script>
        // Array de amigos (comienza vacío)
        const amigos = [];

        // Función para agregar un amigo al array
        function agregarAmigo(nombre) {
            if (nombre === "") {
                alert("Por favor, ingrese un nombre."); // Si el nombre está vacío, muestra una alerta
            } else {
                amigos.push(nombre); // Agrega el nombre al array de amigos
            }
        }

        // Función para hacer el sorteo de un amigo secreto
        function sorteoAmigo() {
            // Verificar si hay amigos en el array
            if (amigos.length === 0) {
                document.getElementById("resultado").innerHTML = "Por favor, ingrese al menos un nombre.";
                return; // Si no hay amigos, no hace el sorteo
            }

            // Generar un índice aleatorio entre 0 y la cantidad de amigos - 1
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);

            // Obtener el nombre del amigo sorteado
            const amigoSorteado = amigos[indiceAleatorio];

            // Mostrar el resultado en la página
            document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
        }

        // Ejemplo de agregar algunos amigos (puedes agregar más)
        agregarAmigo("Carlos");
        agregarAmigo("Ana");
        agregarAmigo("Luis");
        agregarAmigo(""); // Esto no agregará ningún amigo, porque el nombre está vacío
    </script>
</body>
</html>
