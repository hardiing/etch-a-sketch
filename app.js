let container = document.getElementById("container")
let square
let gridBtn = document.getElementById("gridBtn")

gridBtn.addEventListener("click", () => {
    let input = prompt("Enter a number between 4 and 100")
    createBoard(input)
})

function initialBoard() {
    for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 16; y++) {
            square = document.createElement("div")
            square.className = "tile"
            container.appendChild(square)
        }
    }
    let squaresArray = document.querySelectorAll(".tile")

    squaresArray.forEach(function (square) {
        square.addEventListener("mouseover", function() {
        square.classList.add("hover")
        })
    })
}

function createBoard(numInput) {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    for(let x = 0; x < numInput; x++) {
        for(let y = 0; y < numInput; y++) {
            square = document.createElement("div")
            square.className = "tile"
            container.appendChild(square)
        }
    }
    let squaresArray = document.querySelectorAll(".tile")

    squaresArray.forEach(function (square) {
        square.addEventListener("mouseover", function() {
        square.classList.add("hover")
        })
    })
}

initialBoard()