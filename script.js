let number = 5;
let range = document.querySelector("#myRange");
range.addEventListener("change", rangeChange);
let sketchBox = document.querySelector("#sketchBox");
sketchBox.addEventListener("click", sketchClick);
updateGrid(number);

function rangeChange(e) {

    console.log(this.value)
    number = this.value;
    updateGrid(number);

}


function updateGrid(num) {


    sketchBox.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    sketchBox.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (i = 0; i < num * num; i++) {
        let currentCell = document.createElement("div");
        currentCell.classList.toggle("cell");
        sketchBox.appendChild(currentCell);
    }



}


function sketchClick(e) {

    console.log(e.target);
}