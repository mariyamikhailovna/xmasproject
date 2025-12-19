fetch("/xmasproject/header.html")
    .then(r => r.text())
    .then(h => document.getElementById("header").innerHTML = h);

fetch("/xmasproject/footer.html")
    .then(r => r.text())
    .then(f => document.getElementById("footer").innerHTML = f);