let number = parseInt(prompt("How many cells"));

let sketchBox = document.querySelector("#sketchBox");
sketchBox.addEventListener("click", sketchClick);

function sketchClick(e) {

    console.log(e.target);
}

sketchBox.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
sketchBox.style.gridTemplateRows = `repeat(${number}, 1fr)`;



for(i = 0; i < number * number; i++) {


    let currentCell = document.createElement("div");
    currentCell.classList.toggle("cell");
    sketchBox.appendChild(currentCell);
    
}





