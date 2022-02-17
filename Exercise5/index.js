const image = document.getElementById("image");
image.addEventListener("mouseenter", () => {
  image.src = "./img/happiness.png";
});
image.addEventListener("mouseleave", () => {
  image.src = "./img/smile.png";
});
