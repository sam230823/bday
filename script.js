function showPage(pageId){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

/* ---------- PRANII FLOW ---------- */

function playPranii(){
  showPage("praniiPage");

  const video = document.getElementById("birthdayVideo");
  video.play().catch(() => {
      console.log("Autoplay blocked");
  });
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

/* ---------- RUNNING BUTTONS (Mobile + Desktop) ---------- */

function makeButtonRun(buttonId){
  const btn = document.getElementById(buttonId);

  function moveButton(){
      const padding = 20;
      const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding);
      const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding);

      btn.style.left = x + "px";
      btn.style.top = y + "px";
  }

  btn.addEventListener("mouseover", moveButton);  // Desktop
  btn.addEventListener("touchstart", moveButton); // Mobile
}

makeButtonRun("noBtnPranii");
makeButtonRun("noBtnBhuvi");
