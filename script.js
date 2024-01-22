const container = document.querySelector(".container");
let div;
let input = 0;
const btn = document.querySelector(".btn");
btn.textContent = "New Game";
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.style.border = "2px solid white";
  div.style.backgroundColor = "black";
  div.style.height = "25px";
  div.style.width = "25px";
  div.classList.add("div");
  container.appendChild(div);
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = randomNumberGenerator();
  });
}

function randomNumberGenerator() {
  let color_x = Math.floor(Math.random() * 256);
  let color_y = Math.floor(Math.random() * 256);
  let color_z = Math.floor(Math.random() * 256);
  return `rgba(${color_x}, ${color_y}, ${color_z})`;
}

btn.addEventListener("click", () => {
  input = prompt("Please enter the number of squares per side for a new grid");

  deleteDivs();
  createDivs();
});

function deleteDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createDivs() {
  for (let i = 0; i < input * input; i++) {
    const div2 = document.createElement("div");
    div2.style.border = "2px solid white";
    div2.style.backgroundColor = "black";
    div2.style.height = "25px";
    div2.style.width = "25px";
    div2.classList.add("div");
    container.appendChild(div2);
    div2.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = randomNumberGenerator();
    });
  }
}
