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

});