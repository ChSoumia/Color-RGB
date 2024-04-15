const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Extraer valor input y asignarlo a las variables rojo,verde,azul para actualizar el texto del párrafo
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor (rojo, verde, azul){
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar color (RGB) :
inputRojo.addEventListener('change', (e)=>{
  rojo = e.target.value;
  //rojo = inputRojo.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e)=>{
  verde = e.target.value;
  //verde = inputVerde.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e)=>{
  azul = e.target.value;
  //azul = inputAzul.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});