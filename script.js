function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");
  
  html.classList.toggle("light");

  const newImgSrc = html.classList.contains("light")
    ? "./assets/avatar-light.png"
    : "./assets/avatar.png";

  img.setAttribute("src", newImgSrc);
}