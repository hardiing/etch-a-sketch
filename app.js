let container = document.getElementById("container")
let square


function createBoard() {
    for(let x = 0; x < 4; x++) {
        for(let y = 0; y < 4; y++) {
            square = document.createElement("div")
            square.className = "tile"
            container.appendChild(square)
        }
    }
}

createBoard()