const container = document.getElementById("container");
const grid = document.getElementById("grid");
const defaultSize = 16;
const resetButton = document.getElementById("reset");
let size;

function newGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for (let i = 1; i <= size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.style.cssText = "background-color: black";
        });
        grid.appendChild(square);
    }
}

function getSize() {
    size = parseInt(prompt("Enter the size of the new grid, from 1-100"));
    return size;
}

function clearGrid() {
    grid.innerHTML = "";
}

resetButton.addEventListener("click", () => {
    getSize();
    clearGrid();
    newGrid(size);
});

window.onload = () => {
    newGrid(defaultSize)
};


