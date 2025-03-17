<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo de Amigo Secreto</title>
</head>
<body>
    <h2>Sorteo de Amigo Secreto</h2>

    <!-- Botón para realizar el sorteo -->
    <button onclick="sorteoAmigo()">Sortea un Amigo Secreto</button>

    <!-- Lugar donde se mostrará el amigo sorteado o el mensaje de error -->
    <p id="resultado">Haz clic en el botón para ver el amigo secreto.</p>

    <script>
        // Array que guardará los nombres de los amigos
        const amigos = [];

        // Función para agregar un amigo al array
        function agregarAmigo(nombre) {
            if (nombre === "") {
                alert("Por favor, ingresa un nombre para agregar."); // Si el nombre está vacío, muestra un aviso
            } else {
                amigos.push(nombre); // Si no está vacío, lo agrega al array
            }
        }

        // Función para hacer el sorteo de un amigo secreto
        function sorteoAmigo() {
            // Verificamos si hay amigos en el array
            if (amigos.length === 0) {
                document.getElementById("resultado").innerHTML = "No hay amigos para sortear. ¡Por favor, agrega al menos uno!";
                return; // Si no hay amigos, no hace el sorteo
            }

            // Generamos un índice aleatorio basado en el tamaño del array
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);

            // Obtenemos el nombre del amigo sorteado
            const amigoSorteado = amigos[indiceAleatorio];

            // Mostramos el resultado en la página
            document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
        }

        // Ejemplo de cómo agregar amigos al array
        agregarAmigo("Carlos");
        agregarAmigo("Ana");
        agregarAmigo("Luis");
        agregarAmigo(""); // Este nombre vacío no se agregará
    </script>
</body>
</html>

