let number = 5;
let color = "greyColor";
let eraserON = false;
let locked = false;

let lockIcon = document.querySelector("#lockIcon");



let range = document.querySelector("#myRange");
range.addEventListener("change", rangeChange);

let sketchBox = document.querySelector("#sketchBox");
sketchBox.addEventListener("mouseover", sketchClick);

sketchBox.addEventListener("click", lockGrid);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);


let eraser = document.querySelector("#eraser");
let greyColor = document.querySelector("#greyScale");
greyColor.addEventListener("click", greyScale);
eraser.addEventListener("click",erase);

function rangeChange(e) {

    console.log(this.value)
    number = this.value;
    updateGrid(number);
    resetGrid();

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

    if(!locked) {

   
    let currentCell = e.target;
    console.log(currentCell.style);

    if (eraserON) {

        currentCell.classList.remove(color);
    }

    else {
    
    currentCell.classList.add(color);

    }

}
}


function resetGrid() {

    let cellList = document.querySelectorAll(".cell");
    console.log(cellList);
    cellList.forEach(function(element){

        element.classList.remove("greyColor");


    });


}

function greyScale() {

    eraserON = false;
}

function erase() {

    eraserON = true;
}


function lockGrid() {

    if(locked == false) {

        locked = true;
        lockIcon.style.opacity = "100";
        return;
    }

    locked = false;
    lockIcon.style.opacity = "0";
}

updateGrid(number);
resetGrid();