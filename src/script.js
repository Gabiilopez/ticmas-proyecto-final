const verMas1 = document.getElementById("ver-mas-1");
const masInfo1 = document.getElementById("mas-info-1");

verMas1.addEventListener("click", function() {
  if (masInfo1.style.display === "none") {
    masInfo1.style.display = "block";
    verMas1.textContent = "Ver menos";
  } else {
    masInfo1.style.display = "none";
    verMas1.textContent = "Ver mas";
  }
});

const verMas2 = document.getElementById("ver-mas-2");
const masInfo2 = document.getElementById("mas-info-2");

verMas2.addEventListener("click", function() {
  if (masInfo2.style.display === "none") {
    masInfo2.style.display = "block";
    verMas2.textContent = "Ver menos";
  } else {
    masInfo2.style.display = "none";
    verMas2.textContent = "Ver mas";
  }
});
