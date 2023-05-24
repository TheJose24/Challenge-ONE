// Preloader
window.addEventListener("load", () => {
  const contenedor_loader = document.querySelector(".contenedor_loader");
  setTimeout(() => {
    contenedor_loader.style.transition = "opacity 1s, visibility 1s";
    contenedor_loader.style.opacity = 0;
    contenedor_loader.style.visibility = "hidden";
  }, 3000);
});

//Logica
const textArea = document.querySelector (".textoUsuario");
const mensaje = document.querySelector (".textoSalida");

        /*
        la letra "e" es convertida para "enter"
        la letra "i" es convertida para "imes"
        la letra "a" es convertida para "ai"
        la letra "o" es convertida para "ober"
        la letra "u" es convertida para "ufat" */



//Encriptar
function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada
}

//Desencriptar
function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada
}

//Copiar
function read(){
  let text = document.querySelector("#input").value

  return text
}

async function copy(){
  let txt = read()
  await navigator.clipboard.writeText(txt)
}

let btn = document.querySelector("#btnCopiar")

btn.addEventListener("click", copy)

// Evento input para verificar y modificar el contenido ingresado por el usuario
textArea.addEventListener("input", () => {
  const textoValido = validarTexto(textArea.value);
  textArea.value = textoValido;
});

// Función para validar el texto ingresado
function validarTexto(texto) {
  // Convertir el texto a minúsculas y eliminar acentos
  texto = texto.toLowerCase();
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Eliminar caracteres no permitidos
  texto = texto.replace(/[^a-z\s]/g, "");

  return texto;
}