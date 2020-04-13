
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


// text animation
function textfade1(){

  const textel = document.querySelector(".cuvinte1");
  
  const strText = textel.textContent;
  
  const splitText = strText.split("");
  
  textel.textContent = "";
  
  for(let i = 0; i < splitText.length; i++){
    textel.innerHTML += "<element>" + splitText[i] + "</element>";
  }
  
  let char = 0;
  
  let timer = setInterval(onTick, 70);
  
  function onTick(){
    const span = textel.querySelectorAll('element')[char];
    span.classList.add('fadeup');
    char++;
  
    if(char === splitText.length){
      complete();
      return;
    }
  }
  
  function complete(){
    clearInterval(timer);
    timer = null;
  }
  }

  function textfade2(){

    const textel = document.querySelector(".cuvinte2");
    
    const strText = textel.textContent;
    
    const splitText = strText.split("");
    
    textel.textContent = "";
    
    for(let i = 0; i < splitText.length; i++){
      textel.innerHTML += "<element>" + splitText[i] + "</element>";
    }
    
    let char = 0;
    
    let timer = setInterval(onTick, 70);
    
    function onTick(){
      const span = textel.querySelectorAll('element')[char];
      span.classList.add('fadeup');
      char++;
    
      if(char === splitText.length){
        complete();
        return;
      }
    }
    
    function complete(){
      clearInterval(timer);
      timer = null;
    }
    }

    function textfade3(){

      const textel = document.querySelector(".cuvinte3");
      
      const strText = textel.textContent;
      
      const splitText = strText.split("");
      
      textel.textContent = "";
      
      for(let i = 0; i < splitText.length; i++){
        textel.innerHTML += "<element>" + splitText[i] + "</element>";
      }
      
      let char = 0;
      
      let timer = setInterval(onTick, 70);
      
      function onTick(){
        const span = textel.querySelectorAll('element')[char];
        span.classList.add('fadeup');
        char++;
      
        if(char === splitText.length){
          complete();
          return;
        }
      }
      
      function complete(){
        clearInterval(timer);
        timer = null;
      }
      }