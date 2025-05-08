const container = document.querySelector(".container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = ""; 
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
      square.style.backgroundColor = color;
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (1-100):");
  size = parseInt(size);

  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Invalid size. Must be between 1 and 100.");
  }
});

// Default grid
createGrid(16);