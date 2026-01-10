const button = document.getElementById("gacha");

const slots = [
  {
    img: document.getElementById("img1"),
    label: document.getElementById("label1")
  },
  {
    img: document.getElementById("img2"),
    label: document.getElementById("label2")
  },
  {
    img: document.getElementById("img3"),
    label: document.getElementById("label3")
  }
];

const max = 20;
const min = 1;

const gachaMap = {
  1: { image: "../images/characters/suzuka1.png", title: "Silence Suzuka" },
  2: { image: "../images/characters/mcqueen1.png", title: "Mejiro McQueen" },
  3: { image: "../images/characters/rudolf1.png", title: "Symboli Rudolf" },
  4: { image: "../images/characters/vega1.png", title: "Admire Vega" },
  5: { image: "../images/characters/mambo1.png", title: "Matikanetannhauser" },
  6: { image: "../images/characters/haru.png", title: "Haru Urara" },
  7: { image: "../images/characters/digital.png", title: "Agnes Digital" },
  8: { image: "../images/characters/nattie.png", title: "Nice Nature" },
  9: { image: "../images/characters/halo.png", title: "King Halo" },
  10: { image: "../images/characters/berry.png", title: "Mejiro Dober" },
  11: { image: "../images/characters/bakushin.png", title: "Sakura Bakushin O" },
  12: { image: "../images/characters/air.png", title: "Air Groove" },
  13: { image: "../images/characters/taishin.png", title: "Narita Taishin" },
  14: { image: "../images/characters/grass.png", title: "Grass Wonder" },
  15: { image: "../images/characters/fatass.png", title: "Oguri Cap" },
  16: { image: "../images/characters/flash.png", title: "Eishin Flash" },
  17: { image: "../images/characters/machan.png", title: "Aston Machan" },
  18: { image: "../images/characters/daisca.png", title: "Daiwa Scarlet" },
  19: { image: "../images/characters/cb.png", title: "Mr. CB" },
  20: { image: "../images/characters/sil.png", title: "Still in Love" }
};

button.onclick = () => {
  button.disabled = true;

  // reset
  slots.forEach(slot => {
    slot.img.classList.remove("show", "hide");
    slot.label.classList.remove("show", "hide");
    slot.label.textContent = "Rolling...";
    slot.img.src = "";
    slot.label.classList.add("show");
  });

  // rolling
  setTimeout(() => {
    slots.forEach(slot => slot.label.classList.replace("show", "hide"));

    setTimeout(() => {
      let loaded = 0;

      slots.forEach(slot => {
        const roll = Math.floor(Math.random() * max) + min;
        const { title, image } = gachaMap[roll];

        slot.img.onload = () => {
          slot.img.classList.add("show");
          slot.label.classList.add("show");
          loaded++;

          if (loaded === slots.length) {
            button.disabled = false;
          }
        };

        slot.img.src = image;
        slot.label.textContent = title;
      });
    }, 300);
  }, 800);
};
