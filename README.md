# Challenge-Amigo-secreto
Amigo Secreto

Este proyecto es una aplicación simple en JavaScript para organizar un juego de Amigo Secreto. Permite agregar participantes y asignar aleatoriamente un amigo secreto a cada uno.

Funcionalidades

Agregar participantes asegurando que el nombre no esté vacío o duplicado.

Mezclar los nombres de manera aleatoria.

Garantizar que nadie se asigne a sí mismo como amigo secreto.

Mostrar las asignaciones en la consola.

Uso

Agregar participantes llamando a la función agregarParticipante(nombre), donde nombre es una cadena de texto.

Una vez agregados todos los participantes, ejecutar asignarAmigoSecreto() para realizar la asignación.

El resultado se mostrará en la consola en formato de lista con los emparejamientos.

Ejemplo de Código

agregarParticipante("Carlos");
agregarParticipante("Ana");
agregarParticipante("Luis");
agregarParticipante("María");

const resultado = asignarAmigoSecreto();

Requisitos

Node.js o un navegador con soporte para JavaScript.

Notas

Es necesario al menos 2 participantes para realizar la asignación.

La asignación se repite hasta que nadie se asigne a sí mismo.

¡Disfruta del juego de Amigo Secreto!


