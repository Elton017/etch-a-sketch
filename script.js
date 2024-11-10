const container = document.querySelector(".container");

let gridSize = 16;

function createGrid(size) {
    container.innerHTML=""
    for (let i=1; i < size+1; i++){
        let div = document.createElement("div");
        div.className += "row";
        container.appendChild(div)
        for (let j=1; j < size+1; j++) {
            let cell = document.createElement("div");
            cell.className += "cell";
            div.appendChild(cell);
        }
    }
}

createGrid(gridSize)

container.addEventListener("mouseover", (e) => {
    if (e.target.className == "cell"){
        e.target.style.backgroundColor = "black";
        let opacity = parseFloat(e.target.style.opacity) || 0;
        opacity += 0.1;
        e.target.style.opacity = opacity
    }
})

let gridChanger = document.querySelector(".gridsize");
gridChanger.addEventListener("input", (e) => {
    createGrid(parseInt(e.target.value));
})