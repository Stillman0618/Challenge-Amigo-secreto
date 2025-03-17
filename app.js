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
        // Array de amigos (inicialmente vacío)
        const amigos = [];

        // Función para agregar un amigo
        function agregarAmigo(nombre) {
            if (nombre.trim() === "") {
                alert("Por favor, ingrese un nombre."); // Si el nombre está vacío, muestra una alerta
            } else {
                amigos.push(nombre); // Si el nombre no está vacío, lo agrega al array
            }
        }

        // Función para hacer el sorteo de un amigo secreto
        function sorteoAmigo() {
            // Verificar si el array tiene amigos
            if (amigos.length === 0) {
                document.getElementById("resultado").innerHTML = "Por favor, ingrese al menos un nombre.";
                return; // Sale de la función si no hay amigos
            }

            // Generar un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);

            // Obtener el nombre del amigo sorteado
            const amigoSorteado = amigos[indiceAleatorio];

            // Mostrar el resultado en la página
            document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
        }

        // Agregar algunos nombres al array como ejemplo
        agregarAmigo("Carlos");
        agregarAmigo("Ana");
        agregarAmigo("Luis");
        agregarAmigo(""); // Esto no agregará ningún nombre
    </script>
</body>
</html>

