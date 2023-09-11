const sonic = document.querySelector(".sonic");
const crab = document.querySelector(".crab");

const jump = () => {
  sonic.classList.add("jump");

  setTimeout(() => {
    sonic.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  console.log(loop);

  const crabPosition = crab.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (crabPosition <= 90 && sonicPosition < 30) {
    crab.style.animation = "none";
    crab.style.left = `${crabPosition}px`;

    sonic.style.animation = "none";
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = "../sprites/Game-over.png";
    sonic.style.width = "80px";
    sonic.style.marginLeft = "10px";
    sonic.style.marginBottom = "15px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
