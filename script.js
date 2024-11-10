const container = document.querySelector(".container");

let rows = 16;
let columns = 16;

for (let i=1; i < rows+1; i++){
    let div = document.createElement("div");
    div.className += "row";
    container.appendChild(div)
    for (let j=1; j < columns+1; j++) {
        let cell = document.createElement("div");
        cell.className += "cell";
        div.appendChild(cell);
    }
}
