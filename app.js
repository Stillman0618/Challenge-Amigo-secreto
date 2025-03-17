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

    <!-- Área donde se mostrará el amigo sorteado -->
    <p id="resultado">Haz clic en el botón para realizar el sorteo.</p>

    <script>
        // Array de amigos
        const amigos = ["Carlos", "Ana", "Luis", "María"];

        // Función para hacer el sorteo de un amigo secreto
        function sorteoAmigo() {
            // Verificar si el array tiene amigos
            if (amigos.length === 0) {
                document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
                return; // Sale de la función si no hay amigos
            }

            // Generar un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);

            // Obtener el nombre del amigo sorteado
            const amigoSorteado = amigos[indiceAleatorio];

            // Mostrar el resultado en la página
            document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
        }
    </script>
</body>
</html>

