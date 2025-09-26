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
// Array de canciones con sus autores
const musica = [
    { titulo: "River Flows In You", autor: "Yiruma" },
    { titulo: "Can't Help Falling in Love", autor: "Elvis Presley" },
    { titulo: "My Heart Will Go On", autor: "Celine Dion" },
    { titulo: "Imagine", autor: "John Lennon" },
    { titulo: "Married Life", autor: "Michael Giacchino" },
    { titulo: "Your Song", autor: "Elton John" },
    { titulo: "Love of My Life", autor: "Queen" }
];

// Función para mostrar canción y autor aleatorio
document.getElementById("nuevaMusica").addEventListener("click", () => {
    const indice = Math.floor(Math.random() * musica.length);
    const seleccion = musica[indice];
    
    document.getElementById("cancion").textContent = seleccion.titulo;
    document.getElementById("autor").textContent = seleccion.autor;
});














