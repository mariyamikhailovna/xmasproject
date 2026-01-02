const image = document.querySelector("img");
const p = document.querySelector("p");
const h6 = document.querySelector("h6");
const title = document.getElementById("title");
const currentTitle = title.textContent;

p.addEventListener("click", () => {
  const pImage = image.getAttribute("src");
  if(currentTitle == "Silence Suzuka"){
  if (pImage === "../images/silenceSuzuka.png") {
    image.setAttribute("src", "../images/summerSuzuka.png");
    h6.textContent = "Emerald Among the Waves";
  }
  if (pImage === "../images/summerSuzuka.png") {
    image.setAttribute("src", "../images/triesBien.png");
    h6.textContent = "Tracen Academy";
  }
  if (pImage === "../images/triesBien.png") {
    image.setAttribute("src", "../images/silenceSuzuka.png");
    h6.textContent = "The Otherwordly Frontrunner";
  }
}

});