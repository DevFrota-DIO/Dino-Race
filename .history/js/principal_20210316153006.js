let imported = document.createElement("script");
imported.src = "../js/random.js";
document.head.appendChild(imported);

const corredorJS = document.querySelector(".atleta");
const background = document.querySelector(".background");
let audioJump = document.getElementById("audioJump");
let audioError = document.getElementById("audioError");
let audioAviso = document.getElementById("audioAviso");
let audioOver = document.getElementById("audioOver");
let audioHits = document.getElementById("audioHits");
let audioBonus = document.getElementById("audioBonus");

let isJumping = false;
let jumpingRight = false;
let isGameOver = false;
let posLeft = 550;
let position = 200;
let contErro = 0;
let contHits = 0;
let setErro = 0;

let pulo;
let impulse;
let h1Error =  document.getElementById('contadorError');
let h1Hits = document.getElementById('contadorHits');
function blink() {

  h1Error.style.color = '#95cf39';
  h1Hits.style.color = '#95cf39';

}

function playHits(val) {
  if (val == 1) {
    audioHits.play();
    audioHits.currentTime = 0;
    audioHits.loop = false;
  } else {
    audioBonus.play();
    audioBonus.currentTime = 0;
    audioBonus.loop = false;
  }
}
function playError(val) {
  if (val == 1) {
    audioError.play();
    audioError.currentTime = 0;
    audioError.loop = false;
  } else if (val == 2) {
    audioAviso.play();
    audioAviso.currentTime = 0;
    audioAviso.loop = false;
  } else if (val == 3) {
    audioOver.play();
    audioOver.currentTime = 0;
    audioOver.loop = false;
  }
}
function retorno(valor) {
  valor = valor.replace("1", "2");
  document.body.removeAttribute("onload");
  if (valor[0] % 2 == 0) {
    criarPop(valor);
  }
}
function setJump(val) {
  const keysJump = [
    [100, 101],
    [86, 32],
    [87, 68],
  ];
  pulo = keysJump[val][0];
  impulse = keysJump[val][1];
  console.log("recebeu e enviou o parametro pulo");
}

function handleKeyDown(event) {
  console.log("pulando " + event.keyCode);
  if (event.keyCode === pulo) {
    audioJump.play();
    audioJump.currentTime = 0;
    audioJump.loop = false;
    console.log("pulando " + pulo);
    if (!isJumping) {
      jump();
    }
  }
  if (event.keyCode === impulse) {
    console.log("Impulse " + impulse);
    if (!jumpingRight) {
      jumpRight();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 350) {
      // Descendo
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position == 200) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          corredorJS.style.bottom = position + "px";
        }
      }, 20);
    } else {
      // Subindo
      position += 20;
      corredorJS.style.bottom = position + "px";
    }
  }, 20);
}
function jumpRight() {
  jumpingRight = true;

  let impulseInterval = setInterval(() => {
    if (posLeft >= 700) {
      // Recuando
      clearInterval(impulseInterval);

      let leftInterval = setInterval(() => {
        if (posLeft == 550) {
          clearInterval(leftInterval);
          jumpingRight = false;
        } else {
          posLeft -= 50;
          corredorJS.style.left = posLeft + "px";
        }
      }, 50);
    } else {
      // Impulsionando
      posLeft += 50;
      corredorJS.style.left = posLeft + "px";
    }
  }, 50);
}

function create(val) {
  if (val == true) {
    function createPedra() {
      const pedra = document.createElement("div");

      let pedraPosition = 2000;
      let randomTime = Math.random() * 5000;

      if (isGameOver) return;
      pedra.classList.add("pedra");

      let totalCount = 8;
      let num = Math.ceil(Math.random() * totalCount);
      pedra.style.backgroundImage = "url('../img/pedras/pedra" + num + ".png')";
      background.appendChild(pedra);
      pedra.style.left = pedraPosition + "px";
      let leftTimer = setInterval(() => {
        if (pedraPosition < 10) {
          // Saiu da tela
          clearInterval(leftTimer);
          background.removeChild(pedra);
        } else if (contErro == 'A') {
          // Game over
          contErro = 0;
          playError(3);
          clearInterval(leftTimer);
          isGameOver = true;
          randomCreditos(3);
        } else if (
          pedraPosition > 775 &&
          pedraPosition < 800 &&
          position < 220
        ) {
          setErro = 1;
          contErro += 1;
          console.log("errou " + contErro + " vezes");
          document.getElementById('contadorError').innerHTML = 'Erros   '+contErro;
          h1Error.style.color = '#d4eba6';
          h1Hits.style.color = '#d4eba6';
          playError(1);
          if (contErro == 4) {
            playError(2);
            console.log("Cuidado já errou " + contErro + " vezes");
          }
        } else if (
          pedraPosition > 775 &&
          pedraPosition < 800 &&
          position >= 220
        ) {
          setErro = 0;
          contHits += 1;
          console.log("acertou" + contHits + " vezes");
          document.getElementById('contadorHits').innerHTML = 'Acertos   '+contHits;
          playHits(1);
          h1Error.style.color = 'rgb(238, 172, 97)';
          h1Hits.style.color = 'rgb(238, 172, 97)';
          
          if (contHits == 10) {
            
            playHits(2);
            randomBonus();
            
            contHits = 0;
            contErro = 0;
            document.getElementById('contadorHits').innerHTML = 'BÔNUS   '+contHits;
            document.getElementById('contadorError').innerHTML = 'BÔNUS   '+contErro;
            blink();

            let delay = 3000; //1 seconds
            document.getElementById("bonus").style.display = "block";
            setTimeout(function () {
              document.getElementById("bonus").style.display = "none";
            }, delay);
            
            console.log("Ganhou Bonus " + contHits + " Acertos");
          }
        }

        pedraPosition -= 20;
        pedra.style.left = pedraPosition + "px";
      }, 20);

      setTimeout(createPedra, randomTime);
    }

    createPedra();
    document.addEventListener("keydown", handleKeyDown);
  }
}
function createAmbiente() {
  const flora = document.createElement("div");
  let floraPosition = 2000;
  let randomTime2 = Math.random() * 18000;

  if (isGameOver) return;
  flora.classList.add("flora");
  let totalCount = 12;
  let num = Math.ceil(Math.random() * totalCount);
  flora.style.backgroundImage = "url('../img/itens/item" + num + ".png')";
  background.appendChild(flora);
  flora.style.left = floraPosition + "px";

  let leftTimer = setInterval(() => {
    if (floraPosition < -200) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(flora);
    } else {
      floraPosition -= 1;
      flora.style.left = floraPosition + "px";
    }
  }, 30);

  setTimeout(createAmbiente, randomTime2);
}
createAmbiente();

function createNuvem() {
  const nuvem = document.createElement("div");
  let nuvemPosition = 2000;
  let randomTime3 = Math.random() * 15000;

  if (isGameOver) return;
  nuvem.classList.add("nuvem");
  let totalCount2 = 5;
  let num2 = Math.ceil(Math.random() * totalCount2);
  nuvem.style.backgroundImage = "url('../img/nuvens/nuvem" + num2 + ".png')";
  background.appendChild(nuvem);

  let nuvemBottom = 67;
  let myArray = [0, 3, 6, 9];
  let sinal = [+1, -1];
  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  let randomSinal = sinal[Math.floor(Math.random() * sinal.length)];
  nuvem.style.bottom = nuvemBottom + randomSinal * randomItem + "%";

  nuvem.style.left = nuvemPosition + "px";

  let leftTimer = setInterval(() => {
    if (nuvemPosition < -300) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(nuvem);
    } else {
      nuvemPosition -= 1;
      nuvem.style.left = nuvemPosition + "px";
    }
  }, 50);

  setTimeout(createNuvem, randomTime3);
}
createNuvem();

function createAereos() {
  const aereo = document.createElement("div");
  let aereoPosition = 2000;
  let randomTime3 = Math.random() * 30000;

  if (isGameOver) return;
  aereo.classList.add("aereos");
  let totalCount2 = 10;
  let num2 = Math.ceil(Math.random() * totalCount2);
  aereo.style.backgroundImage =
    "url('../img/itens/aereos/aereo" + num2 + ".gif')";
  background.appendChild(aereo);

  let aereoBottom = 67;
  let myArray = [0, 3, 6, 9];
  let sinal = [+1, -1];
  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  let randomSinal = sinal[Math.floor(Math.random() * sinal.length)];
  aereo.style.bottom = aereoBottom + randomSinal * randomItem + "%";

  aereo.style.left = aereoPosition + "px";

  let leftTimer = setInterval(() => {
    if (aereoPosition < -100) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(aereo);
    } else {
      aereoPosition -= 1;
      aereo.style.left = aereoPosition + "px";
    }
  }, 10);

  setTimeout(createAereos, randomTime3);
}
createAereos();

function createBorboletas() {
  const borboleta = document.createElement("div");
  let borboletaPosition = 2000;
  let randomTime3 = Math.random() * 30000;

  if (isGameOver) return;
  borboleta.classList.add("borboletas");
  let totalCount2 = 9;
  let num2 = Math.ceil(Math.random() * totalCount2);
  borboleta.style.backgroundImage =
    "url('../img/itens/borboletas/borboleta" + num2 + ".gif')";
  background.appendChild(borboleta);

  let borboletaBottom = 37;
  let myArray = [0, 3, 6, 9];
  let sinal = [+1, -1];
  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  let randomSinal = sinal[Math.floor(Math.random() * sinal.length)];
  borboleta.style.bottom = borboletaBottom + randomSinal * randomItem + "%";

  borboleta.style.left = borboletaPosition + "px";

  let leftTimer = setInterval(() => {
    if (borboletaPosition < -100) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(borboleta);
    } else {
      borboletaPosition -= 1;
      borboleta.style.left = borboletaPosition + "px";
    }
  }, 20);

  setTimeout(createBorboletas, randomTime3);
}
createBorboletas();

function createPassaros() {
  const passaro = document.createElement("div");
  let passaroPosition = 2000;
  let randomTime3 = Math.random() * 30000;

  if (isGameOver) return;
  passaro.classList.add("passaros");
  let totalCount2 = 10;
  let num2 = Math.ceil(Math.random() * totalCount2);
  passaro.style.backgroundImage =
    "url('../img/itens/passaros/passaro" + num2 + ".gif')";
  background.appendChild(passaro);

  let passaroBottom = 65;
  let myArray = [0, 3, 6, 9, 12, 15, 18, 21];
  let sinal = [+1, -1];
  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  let randomSinal = sinal[Math.floor(Math.random() * sinal.length)];
  passaro.style.bottom = passaroBottom + randomSinal * randomItem + "%";

  passaro.style.left = passaroPosition + "px";

  let leftTimer = setInterval(() => {
    if (passaroPosition < -100) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(passaro);
    } else {
      passaroPosition -= 1;
      passaro.style.left = passaroPosition + "px";
    }
  }, 15);

  setTimeout(createPassaros, randomTime3);
}
createPassaros();

function createTerrestres() {
  const terrestre = document.createElement("div");
  let terrestrePosition = 2000;
  let randomTime2 = Math.random() * 50000;

  if (isGameOver) return;
  terrestre.classList.add("terrestre");
  let totalCount = 7;
  let num = Math.ceil(Math.random() * totalCount);
  terrestre.style.backgroundImage =
    "url('../img/itens/terrestres/terrestre" + num + ".gif')";
  background.appendChild(terrestre);
  terrestre.style.left = terrestrePosition + "px";

  let leftTimer = setInterval(() => {
    if (terrestrePosition < -200) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(terrestre);
    } else {
      terrestrePosition -= 1;
      terrestre.style.left = terrestrePosition + "px";
    }
  }, 10);

  setTimeout(createTerrestres, randomTime2);
}
createTerrestres();
