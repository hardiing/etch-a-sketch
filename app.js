let container = document.getElementById("container")
let square


function createBoard() {
    for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 16; y++) {
            square = document.createElement("div")
            square.className = "tile"
            container.appendChild(square)
            let number = document.createElement("p")
            number.textContent = x
            square.appendChild(number)
        }
    }
}

createBoard()