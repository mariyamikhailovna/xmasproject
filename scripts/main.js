const image = document.querySelector("img");
const p = document.querySelector("p");
const h6 = document.querySelector("h6");
const title = document.getElementById("title");
const currentTitle = title.textContent;

p.addEventListener("click", () => {
  const pImage = image.getAttribute("src");
  if(currentTitle == "Silence Suzuka"){
  if (pImage === "../images/characters/suzuka1.png") {
    image.setAttribute("src", "../images/characters/suzuka3.png");
    h6.textContent = "Emerald Among the Waves";
  }
  if (pImage === "../images/characters/suzuka3.png") {
    image.setAttribute("src", "../images/characters/suzuka2.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/characters/suzuka2.png") {
    image.setAttribute("src", "../images/characters/suzuka1.png");
    h6.textContent = "The Otherwordly Frontrunner";
  }
}
  if(currentTitle == "Mejiro McQueen"){
  if (pImage === "../images/characters/mcqueen1.png") {
    image.setAttribute("src", "../images/characters/mcqueen3.png");
    h6.textContent = "End of the Skies";
  }
  if (pImage === "../images/characters/mcqueen3.png") {
    image.setAttribute("src", "../images/characters/mcqueen2.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/characters/mcqueen2.png") {
    image.setAttribute("src", "../images/characters/mcqueen1.png");
    h6.textContent = "Frontline Elegance";
  }
}

  if(currentTitle == "Mejiro McQueen"){
  if (pImage === "../images/characters/mcqueen1.png") {
    image.setAttribute("src", "../images/characters/mcqueen3.png");
    h6.textContent = "End of the Skies";
  }
  if (pImage === "../images/characters/mcqueen3.png") {
    image.setAttribute("src", "../images/characters/mcqueen2.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/characters/mcqueen2.png") {
    image.setAttribute("src", "../images/characters/mcqueen1.png");
    h6.textContent = "Frontline Elegance";
  }
}

  if(currentTitle == "Symboli Rudolf"){
  if (pImage === "../images/characters/rudolf1.png") {
    image.setAttribute("src", "../images/characters/rudolf3.png");
    h6.textContent = "Archer by Moonlight";
  }
  if (pImage === "../images/characters/rudolf3.png") {
    image.setAttribute("src", "../images/characters/rudolf2.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/characters/rudolf2.png") {
    image.setAttribute("src", "../images/characters/rudolf1.png");
    h6.textContent = "Emperor";
  }
}

  if(currentTitle == "Mambo"){
  if (pImage === "../images/characters/mambo1.png") {
    image.setAttribute("src", "../images/characters/mambo3.png");
    h6.textContent = "Blue Turbulence";
  }
  if (pImage === "../images/characters/mambo3.png") {
    image.setAttribute("src", "../images/characters/mambo2.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/characters/mambo2.png") {
    image.setAttribute("src", "../images/characters/mambo1.png");
    h6.textContent = "Pan~Paka~Tiru~Toto";
  }
}

  if(currentTitle == "Admire Vega"){
  if (pImage === "../images/characters/vega1.png") {
    image.setAttribute("src", "../images/characters/vega3.png");
    h6.textContent = "Glacialis Vega";
  }
  if (pImage === "../images/characters/vega3.png") {
    image.setAttribute("src", "../images/characters/vega2.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/characters/vega2.png") {
    image.setAttribute("src", "../images/characters/vega1.png");
    h6.textContent = "The Glittering Brightest Star";
  }
}
});