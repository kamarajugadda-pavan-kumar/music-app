window.addEventListener("mouseup", function (event) {
  var pol = document.querySelectorAll("#popup-container");
  console.log(pol);
  if (pol) {
    for (let i = 0; i < pol.length; i++) {
      if (event.target != pol[i] && event.target.parentNode != pol[i]) {
        pol[i].style.display = "none";
      }
    }
  }
});
