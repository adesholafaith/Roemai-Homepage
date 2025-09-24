document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const enterScreen = document.getElementById("enterScreen");
  const container = document.getElementById("container");
  const footer = document.getElementById("footer");
  const robot1 = document.getElementById("robot1");
  const robot2 = document.getElementById("robot2");



  enterBtn.addEventListener("click", () => {
    // hide welcome screen, show container
    enterScreen.style.display = "none";
    container.style.display = "block";
    footer.style.display = "block";

    // fade in robot1 after a short delay
    setTimeout(() => {
      robot1.classList.remove("hidden");
      robot1.classList.add("visible");
    }, 200); // delay ensures CSS transition runs

    let showFirst = true;

    // toggle robots
    setInterval(() => {
      if (showFirst) {
        robot1.classList.remove("visible");
        robot1.classList.add("hidden");

        robot2.classList.remove("hidden");
        robot2.classList.add("visible");
      } else {
        robot2.classList.remove("visible");
        robot2.classList.add("hidden");

        robot1.classList.remove("hidden");
        robot1.classList.add("visible");
      }
      showFirst = !showFirst;
    }, 4000); // swap every 4s
  });
});

