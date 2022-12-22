import "./styles.css";
var box = document.getElementById("box");
var toggle = document.getElementById("toggle");
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var text = document.getElementById("text");
dot1.addEventListener("click", function () {
  text.style.color = "white";
  document.body.style.backgroundColor = "black";
  dot1.style.backgroundColor = "white";
  toggle.style.backgroundColor = "white";
  dot2.style.backgroundColor = "black";
});
dot2.addEventListener("click", function () {
  text.style.color = "black";
  document.body.style.backgroundColor = "white";
  dot1.style.backgroundColor = "black";
  toggle.style.backgroundColor = "white";
  dot2.style.backgroundColor = "white";
});
