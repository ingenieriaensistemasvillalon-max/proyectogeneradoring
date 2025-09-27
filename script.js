// Declaramos un arreglo (array) con varias musicas
const musica = [
  "River Flows In You.",
  "Can't Help Falling in Love.",
  "My Heart Will Go On.",
  "Imagine.",
  "Married Life.",
  "Your Song.",
  "Love of My Life.",
];

// Definimos la función que mostrará una cancion aleatoria
function generarMusica() {
  // Generamos un número aleatorio entre 0 y la cantidad de musicas (musica.length)
  // Math.random() → número entre 0 y 1
  // * citas.length → escala ese número al rango de musicas disponibles
  // Math.floor() → redondea hacia abajo para obtener un número entero válido
  const indice = Math.floor(Math.random() * musica.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la musica que corresponde al índice generado
  document.getElementById("quote").innerText = musica[indice];
}
const musica = [
  { titulo: "River Flows In You", autor: "Yiruma" },
  { titulo: "Can't Help Falling in Love", autor: "Elvis Presley" },
  { titulo: "My Heart Will Go On", autor: "Celine Dion" },
  { titulo: "Imagine", autor: "John Lennon" },
  { titulo: "Married Life", autor: "Michael Giacchino" }
];

const btn = document.getElementById("nuevaMusica");
const cancionElem = document.getElementById("cancion");
const autorText = document.getElementById("autorText");

btn.addEventListener("click", () => {
  const aleatoria = Math.floor(Math.random() * musica.length);
  cancionElem.textContent = musica[aleatoria].titulo;
  autorText.textContent = "Autor: " + musica[aleatoria].autor; // Solo texto debajo del botón
});
</script>














