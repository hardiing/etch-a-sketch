let container = document.getElementById("container")
let square
let gridBtn = document.getElementById("gridBtn")

gridBtn.addEventListener("click", () => {
    prompt("howdy")
})

function createBoard() {
    for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 16; y++) {
            square = document.createElement("div")
            square.className = "tile"
            container.appendChild(square)
        }
    }
}

createBoard()

let squaresArray = document.querySelectorAll(".tile")

squaresArray.forEach(function (square) {
    square.addEventListener("mouseover", function() {
        square.classList.add("hover")
    })
})