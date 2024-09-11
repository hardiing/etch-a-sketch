let container = document.getElementById("container")
let square
let gridBtn = document.getElementById("gridBtn")

gridBtn.addEventListener("click", () => {
    let input = prompt("Enter a number between 4 and 100")
    createBoard(input)
})

function createBoard(numInput) {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    for(let x = 0; x < numInput * numInput; x++) {
        square = document.createElement("div")
        square.className = "tile"
        container.appendChild(square)
    }

    let newHeight = newWidth = 768 / numInput ;
    console.log(newHeight);
    const newDivs = document.querySelectorAll('.tile');
    newDivs.forEach(element => {
        element.style.height = newHeight.toString() + "px";
        element.style.width = newWidth.toString() + "px";
      
    })

    let squaresArray = document.querySelectorAll(".tile")

    squaresArray.forEach(function (square) {
        square.addEventListener("mouseover", function() {
        square.classList.add("hover")
        })
    })
}

createBoard(16)