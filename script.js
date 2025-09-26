// Declaramos un arreglo (array) con varias musicas
const musica = [
  "River Flows In You.",
  "Can't Help Falling in Love.",
  "My Heart Will Go On.",
  "Imagine.",
  "Married Life.",
  "Comptine d un Autre été:
  L'Après-Midi.",
  "Your Song.",
  "Love of My Life.",
  "Here, There and Everywhere.",
  "Hallelujah.",
  "Shallow.",
  "Amore.",
  "El vals del minuto.",
  "Angels.",
];
 <!-- Aquí se mostrará el autor (por ahora vacío) -->
  <p id="autor"></p>   
const autores = [
    "Yiruma",// River Flows In You
    "Elvis Presley",// Can't Help Falling in Love
    "Céline Dion", 
     "John Lennon",
     "Michael Giacchino",
    "Yann Tiersen",
     "Elton John",
      "Queen",
      "The Beatles",
      "Leonard Cohen",
      "Lady Gaga & Bradley
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
  document.getElementById("autor").innerText = "Autor: " + autores[indice];
}








