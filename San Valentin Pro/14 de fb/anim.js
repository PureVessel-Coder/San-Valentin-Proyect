// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amor, sé que estás cansada,", time: 15 },
  { text: "Tus ojos están agotados por la noche.", time: 21 },
  { text: "Amor, ven al suelo de la cocina,", time: 28 },
  { text: "Las baldosas están frías, y yo también.", time: 33 },
  { text: "Así que toma de mí lo que quieras, lo que necesites,", time: 41 },
  { text: "Toma de mí lo que quieras, lo que necesites,", time: 54 },
  { text: "Pero amor, por favor quédate conmigo.", time: 67 },
  { text: "Amor, siento tu tristeza,", time: 88 },
  { text: "Derramándose por tu piel.", time: 93 },
  { text: "Y no quiero estar solo,", time: 100 },
  { text: "Si lo estoy esta noche, lo estaré por siempre.", time: 107 },
  { text: "Así que toma de mí lo que quieras, lo que necesites,", time: 113 },
  { text: "Toma de mí lo que deseas, lo que necesites,", time: 126 },
  { text: "Pero amor, por favor quédate conmigo.", time: 139 },
  { text: "Y puedo verte, puedo sentirte,", time: 153 },
  { text: "Deslizandote entre mis manos.", time: 160 },
  { text: "Oh, y puedo saborearte, puedo saborearte,", time: 166 },
  { text: "Moviendote entre mis manos", time: 173 },
  { text: "Asi que toma de mi lo que quieras, lo que necesites", time: 179 },
  { text: "Toma de mi lo que deseas, lo que necesites", time: 192 },
  { text: "Mi amor, Porfavor quedate conmigo", time: 194 },
  { text: "Mi amor... Porfavor, quedate conmigo...", time: 217 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);