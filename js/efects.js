var soundInicio = 7;
var soundJogo = 8;
var soundError = 9;
var soundAvisoFim = 9;
var soundOver = 7;
var soundHits = 9;
var soundBonus = 18;
var soundJump = 3;
var soundFim = 6;

var elementInicio = document.getElementById("audioInicio");
var elementJogo = document.getElementById("audioJogo");
var elementError = document.getElementById("audioError");
var elementAvisoFim = document.getElementById("audioAviso");
var elementHits = document.getElementById("audioHits");
var elementOver = document.getElementById("audioOver");
var elementBonus = document.getElementById("audioBonus");
var elementJump = document.getElementById("audioJump");



  function randomAudio(val,opt) {
    if (val == 1) {
        let num = Math.ceil(Math.random() * soundInicio);
    elementInicio.setAttribute("src",'sons/inicio/inicio'+num+'.mp3');
    elementInicio.volume=0.3;
    } else if(val == 2) {
      
      document.getElementById('divTela').style.display = 'inherit';
        let num2 = Math.ceil(Math.random() * soundJogo);
        elementJogo.setAttribute("src",'../sons/jogo/jogo'+num2+'.mp3') ;
        elementJogo.volume=0.3;
    }else if(val == 3){


var delay=1000; //1 seconds
setTimeout(function(){
  
let createAudio = document.createElement('audio');
createAudio.setAttribute('id', "audioFim");
document.body.appendChild(createAudio);
var elementFim = document.getElementById("audioFim");
    let num9 = Math.ceil(Math.random() * soundFim);
      elementFim.setAttribute("src",'../sons/fim/fim'+num9+'.mp3') ;
      elementFim.volume=0.3;
      elementFim.play();
      elementFim.currentTime = 0;
    elementFim.loop = true;
},delay);
    }
    if (opt == 1) {
      // Erro
        let num3 = Math.ceil(Math.random() * soundError);
        elementError.setAttribute("src",'../sons/erro/error'+num3+'.mp3') ;
        elementError.volume=1.0;
      // Alerta Fim
        let num4 = Math.ceil(Math.random() * soundAvisoFim);
        elementAvisoFim.setAttribute("src",'../sons/aviso/aviso'+num4+'.mp3') ;
        elementAvisoFim.volume=1.0;
    //  Game Over
        let num5 = Math.ceil(Math.random() * soundOver);
        elementOver.setAttribute("src",'../sons/over/over'+num5+'.mp3') ;
        elementOver.volume=1.0;
    // Hits 
        let num6 = Math.ceil(Math.random() * soundHits);
        elementHits.setAttribute("src",'../sons/acerto/hits'+num6+'.mp3') ;
        elementHits.volume=1.0;
        // Bonus
        let num7 = Math.ceil(Math.random() * soundBonus);
        elementBonus.setAttribute("src",'../sons/bonus/bonus'+num7+'.mp3') ;
        elementBonus.volume=1.0;
        // Jump
        let num8 = Math.ceil(Math.random() * soundJump);
        elementJump.setAttribute("src",'../sons/pulo/jump'+num8+'.mp3') ;
        elementJump.volume=1.0;
        
    }
  }

// Preferi construir o footer assim, mas...
  function randomCreditosOne(val){
    if(val == 1){
      return (document.getElementById('primFooter').innerHTML = 
      '<footer id="footer">' +
      '<br>' +
      '<p class="autor">2021 <a href="https://github.com/DevFrota">Developed by Lúcio Frota</a></p>' +
      '<p>Credits - Template code base by <a href="https://github.com/celso-henrique/">Celso Henrique</a></p>' +
      '<p><a href="https://digitalinnovation.one/">Digital Innovation One</a></p>' +
      '</footer>');
    }
    
  }


