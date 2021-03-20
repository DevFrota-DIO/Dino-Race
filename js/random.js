
var audioFim = document.getElementById('audioFim');
var audioJogo = document.getElementById('audioJogo');
  function randomBack() {
    var elementFundo = document.getElementById("fundo");
    var totalBack = 6;
    let num = Math.ceil(Math.random() * totalBack);
    elementFundo.style.backgroundImage = "url('../img/campos/campo" + num + ".png')";
    elementFundo.CSSStyleposition = "relative";
    
  }
  
  randomBack();

  function randomBonus() {
    var backBonus = document.getElementById("bonus");
    var total = 17;
    let num = Math.ceil(Math.random() * total);
    backBonus.style.backgroundImage = "url('../img/itens/bonus/bonus" + num + ".gif')";
   
    
  }
  

  function randomIdea() {
    let elementFundo = document.getElementById("pop");
    let totalBack = 5;
    let num = Math.ceil(Math.random() * totalBack);
    elementFundo.style.backgroundImage = "url('../img/ideia/ideia"+num +".png')";
    
  }
  
  randomIdea();
  
  function randomAtleta(atleta) {
    const elementAtleta = document.getElementById("atleta");
  
    console.log('entrou no randomatleta ' + atleta)
    let num2 = atleta;
    elementAtleta.style.backgroundImage = "url('../img/atletas/atleta"+num2+".gif')";
  }

  function randomCreditos(val) {
    if (val == 3) {
      randomAudio(3,0);
      var link =
      [
        '<a href="https://www.youtube.com/channel/UCMxqhdELkftE8DuBZiwdPfg"><img src="../links/dioweb/dioYouTube.jpg" alt="DIO Youtube"></a>',
        '<a href="https://digitalinnovation.one/"><img src="../links/dioweb/logoDio.png" alt="DIO Home"></a>',
        '<a href="https://linktr.ee/digitalinnovation.one"><img src="../links/dioweb/bannerDio.png" alt="DIO Lista"></a>',

      ];
    console.log('Entrou');
    var randomLink = link[Math.floor(Math.random() * link.length)];

    (document.body.innerHTML =
      '<h1 class="game-over">Não desista nunca, continue tentando!</h1><div class="creditos">' + randomLink + '</div>'+
'<footer id="footer">' +
'<button class="butonsEnd" style="width:150px;" onclick="window.location.reload()">Restart</button>'+
'<button class="butonsEnd" style="width:150px;" onclick="window.history.back()">Opções</button>'+
'<button class="butonsEnd" style="width:150px;" onclick="location.href = '+"'https://gootopps.epizy.com/'"+'"'+'>GooTopps</button>'+
      '<br>' +
      '<p class="autor">Dino Race 2021 <a href="https://github.com/DevFrota">By Lúcio Frota</a></p>' +
      '<p>Credits - Template code base by <a href="https://github.com/celso-henrique/">Celso Henrique</a></p>' +
      '<p><a href="https://digitalinnovation.one/">Digital Innovation One</a></p>' +
      '</footer>');
    } 
    
  }


