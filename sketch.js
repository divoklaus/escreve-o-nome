let palavra;

function setup() {
  createCanvas(600, 600);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Weslley imperador pra vc tá?", "Chora invejosa(o)", "Mi amore"];
  
  return random(palavras);
}

function inicializaCores() {
  
  background("royalblue");
  fill("whith");
  textFont("Poetsen One");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
}