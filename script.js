function showPage(pageId){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

/* ---------- PRANII FLOW ---------- */

function playPranii(){
  showPage("praniiPage");
  document.getElementById("birthdayVideo").play();
}

function showPraniiText(){
  showPage("praniiTextPage");

  let audio = document.getElementById("praniiAudio");
  audio.play();

  audio.onended = function(){
      showPage("happyPraniiPage");
  }
}

function showCutePranii(){
  document.getElementById("cuteMsgPranii").style.display = "block";
}

/* ---------- BHUVI FLOW ---------- */

function showBhuviBirthday(){
  showPage("happyBhuviPage");
  document.getElementById("bhuviAudio").play();
}

function showCuteBhuvi(){
  document.getElementById("cuteMsgBhuvi").style.display = "block";
}

/* ---------- RUNNING BUTTONS ---------- */

function makeButtonRun(buttonId){
  const btn = document.getElementById(buttonId);

  btn.addEventListener("mouseover",()=>{
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
      btn.style.left = x + "px";
      btn.style.top = y + "px";
  });
}

makeButtonRun("noBtnPranii");
makeButtonRun("noBtnBhuvi");
