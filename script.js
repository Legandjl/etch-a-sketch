let number = 9;

const eraserColor = "#A7D0CD";
const starterColor = "rgb(128, 128, 128)";

let eraserOn = false;
let locked = false;


let lockIcon = document.querySelector("#lockIcon");

let gridSlider = document.querySelector("#myRange");
gridSlider.addEventListener("change", rangeChange);

let sketchBox = document.querySelector("#sketchBox");
sketchBox.addEventListener("mouseover", sketch);
sketchBox.addEventListener("click", lockGrid);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

let eraser = document.querySelector("#eraser");
let greyButton = document.querySelector("#greyScale");

greyButton.addEventListener("click", greyScale);
eraser.addEventListener("click", erase);

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


function sketch(e) {

    if (!locked) {

        let newCol;
        let currentCell = e.target;
        let style = window.getComputedStyle(currentCell);
        //checks to see if the cell color == eraser/original color
        if (style.getPropertyValue("background-color") == "rgb(167, 208, 205)") {

            newCol = starterColor;

        } else {

            newCol = darkenColor(style.getPropertyValue("background-color"));

        }

        if (eraserOn) {

            currentCell.style["background-color"] = eraserColor;

        } else {


            currentCell.style["background-color"] = newCol;


        }

    }
}


function resetGrid() {

    let cellList = document.querySelectorAll(".cell");

    cellList.forEach(function (element) {

        element.style["background-color"] = eraserColor;

    });

    removeButtonScale();
    color = "greyColor";
    eraserOn = false;
    greyButton.classList.add("buttonScale");

}

function greyScale(e) {

    removeButtonScale();
    e.target.classList.add("buttonScale");
    eraserOn = false;
}

function erase(e) {

    removeButtonScale();
    e.target.classList.add("buttonScale");
    eraserOn = true;
}


function lockGrid() {

    if (locked == false) {

        locked = true;
        lockIcon.style.opacity = "100";
        return;
    }

    locked = false;
    lockIcon.style.opacity = "0";
}


function removeButtonScale() {

    let buttonList = document.querySelectorAll(".colorIcon");
    buttonList.forEach(function (element) {

        element.classList.remove("buttonScale");


    });
}

//takes an rgb value and removes the numbers from it so I can manipulate it

function darkenColor(color) {

    let rgbArray = color.match(/\d+/g);
    let num1 = parseInt(rgbArray[0]);
    let num2 = parseInt(rgbArray[1]);
    let num3 = parseInt(rgbArray[2]);

    if (num1 <= 48) {

        return color;
    }

    let newColor = `rgb(${num1 - 10},${num2 - 10},${num3 - 10})`;

    return newColor;
}

updateGrid(number);
resetGrid();