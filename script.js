document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const enterScreen = document.getElementById("enterScreen");
  const container = document.getElementById("container");
  const robot = document.getElementById("robot");

  enterBtn.addEventListener("click", () => {
    enterScreen.style.display = "none";
    container.style.display = "block";

    setTimeout(() => {
      robot.classList.remove("hidden");
      robot.classList.add("visible");
    }, 1000);
  });
});

