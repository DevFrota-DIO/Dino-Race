var opt;
var criarPop;
var fundoLi = 0;
let optFinal = [0, 0];
var contOpt = 0;


const finalOptions = function (valOpt, opt) {
  if (opt == 1 && optFinal[0] == 0) {
    optFinal[0] = valOpt;
    contOpt += 1;
    console.log("Guardou o primeiro option");
  } else if (opt == 1) {
    optFinal[0] = valOpt;
  }
  if (opt == 2 && optFinal[1] == 0) {
    optFinal[1] = valOpt;
    contOpt += 1;
  } else if (opt == 2) {
    optFinal[0] = valOpt;
  }

  if (contOpt == 2) {
    setData(optFinal[0], optFinal[1]);
    console.log("Mandou os dois options");
    optFinal = [0, 0];
    contOpt = 0;
  }
};

 

  function setAtleta(opt, val) {
    let cont = 0;
    const botao = document.querySelector("#playGame");
    const opcao = document.getElementById(opt);

    if (fundoLi != 0) {
      const opcao2 = document.getElementById(fundoLi);
      opcao2.setAttribute("style", "background-color:darkslategray");
      opcao2.setAttribute("style", "border:solid 4px gray");
    }

    console.log("Entrou no Set" + opt);
    if (opt == 1 || opt == 2 || opt == 3 || opt == 4) {
      cont += 1;
      opcao.style.backgroundColor = "rgb(34, 121, 121)";
      opcao.style.border = "solid 4px rgb(124, 207, 159)";
      console.log("Entrou de novo" + opt);
      fundoLi = opt;

      botao.setAttribute("onclick", "finalOptions(" + opt + ",2)");

      console.log("Mandou a segunda option " + opt);
    }
  }

  // Enviando dados 
  function setData(num1, num2) {
    var valor = [num1, num2];
    var myWindow = window.open(
      "./links/Dino Race.html?options=" + valor,
      "_self"
    );
  }

// Executando Sons
function play(val) {
  if (val == 1) {
    document.getElementById("container").style.display = "block";
    document.getElementById("pop").style.display = "none";
    let pop = document.getElementById("audioInicio");
    return pop.play();
  } else if (val == 2) {
    document.getElementById("pop").style.display = "none";
    let pop = document.getElementById("audioJogo");
    return pop.play();
  }
}
//Fechando a janela
function tabClose() {
  var tab = window.open(window.location, "_parent");
  tab.close();
}
//   Contagem Regressiva;
var tempCount = 5;
var divCountRegres = document.getElementById("divCountRegres");
function creditsCountRegres() {
  if (tempCount - 1 >= 0) {
    tempCount = tempCount - 1;
    divCountRegres.innerText = "0" + tempCount;
    setTimeout("creditsCountRegres()", 1000);
  }
}

// Setando Opções
function setOptionKey(val) {
  if (val == 1) {
    document.getElementById("formOptionKey").style.display = "inline-block";
  } else {
    document.getElementById("formOptionKey").style.display = "none";
    alert("Ops! Pedimos desculpas. \nOpção Ainda em Implementação!");
  }
}

// Setando Primeiro Form
function primSetForm(val, option) {
  if (val == true) {
    document.getElementById("divPrimOptios").style.display = "block";
    document.getElementById("titlePrimOption").innerHTML =
      "Escolha a combinação de teclas para jogar";
    document.getElementById("optionReturn").style.display = "none";
    document.getElementById("titlePrimOption").style.color = "white";
    document.getElementById("buttonOk").style.display = "none";
  } else if (option == "keysDefault" || option == "moreKeys") {
    var radios = document.getElementsByName("inputDef");
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log("Escolheu: " + radios[i].value);
        if (radios[i].value == "keysDefault") {
          console.log("Escolheu o option Padrão: " + option);
          document.getElementById("divPrimOptios").style.display = "none";
          document.getElementById("titlePrimOption").innerHTML =
            "Jogue com as teclas 4 para Saltar e 5 para Impulso";
          document.getElementById("optionReturn").style.display = "block";
          document.getElementById("titlePrimOption").style.color = "#95cf39";
          document.getElementById("buttonOk").style.display = "inline-block";
          document
            .getElementById("buttonOk")
            .setAttribute(
              "onclick",
              "randomAudio(1);play(1);finalOptions(0,1)"
            );
          radios[i].checked = false;
        } else {
          document.getElementById("optionList").style.display = "initial";
          document.getElementById("optionPerson").style.display = "inline-grid";
          document.getElementById("divPrimOptios").style.display = "none";
          radios[i].checked = false;
        }
      }
    }
  }
// Setando mais Opções 
  var varSetKeys = document.getElementsByName("setKeys");

  if (option == "comb1" || option == "comb2" || option == "comb3") {
    document.getElementById("optionList").style.display = "none";
    document.getElementById("optionPerson").style.display = "none";
    document.getElementById("divPrimOptios").style.display = "none";
    document.getElementById("formOptionKey").style.display = "none";
    document.getElementById("optionReturn").style.display = "block";
    document.getElementById("titlePrimOption").style.color = "aqua";

    for (let i = 0; i < varSetKeys.length; i++) {
      if (option == "comb1") {
        document.getElementById("titlePrimOption").innerHTML =
          "Jogue com as teclas  " +
          document.getElementById("labelOne").innerText +
          ".";
        document.getElementById("buttonOk").style.display = "inline-block";
        document
          .getElementById("buttonOk")
          .setAttribute("onclick", "randomAudio(1);play(1);finalOptions(0,1)");
        varSetKeys[i].checked = false;
      } else if (option == "comb2") {
        document.getElementById("titlePrimOption").innerHTML =
          "Jogue com as teclas  " +
          document.getElementById("labelTwo").innerText +
          ".";
        document.getElementById("buttonOk").style.display = "inline-block";
        document
          .getElementById("buttonOk")
          .setAttribute("onclick", "randomAudio(1);play(1);finalOptions(1,1)");
        varSetKeys[i].checked = false;
      } else if (option == "comb3") {
        document.getElementById("titlePrimOption").innerHTML =
          "Jogue com as teclas  " +
          document.getElementById("labelThree").innerText +
          ".";
        document.getElementById("buttonOk").style.display = "inline-block";
        document
          .getElementById("buttonOk")
          .setAttribute("onclick", "randomAudio(1);play(1);finalOptions(2,1)");
        varSetKeys[i].checked = false;
      }
    }
  }

  console.log("Entregando Primeiro Option");
}
// Enviando parametros 
function pegaOption(parameter) {
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;
  var params = loc.split("&");
  for (i = 0; i < params.length; i++) {
    param_name = params[i].substring(0, params[i].indexOf("="));
    if (param_name == parameter) {
      param_value = params[i].substring(params[i].indexOf("=") + 1);
    }
  }
  if (param_value) {
    console.log("Parametros recebidos");
    param_value = param_value.split(",");
    randomAtleta(param_value[1]);
    setJump(param_value[0]);
  } else {
    return undefined;
  }
}
