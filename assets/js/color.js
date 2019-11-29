//initilaize the colors
let numSquare = 6;
let colors = [];
let pickedColor;
let square = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1display = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modebtn = document.querySelectorAll(".mode");


    colorDisplay.textContent = pickedColor;
int();
function int() {
    setupMode();
    setupSquare();
    reset();

}

function setupMode() {
    for (let i = 0; i < modebtn.length; i++) {
        modebtn[i].addEventListener("click", function() {
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
            reset();
        });
    }
}

function setupSquare() {
    for (let i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
        //add event listener for clicked the square
        square[i].addEventListener("click", function() {
            let clickedColor = this.style.background;
            //match the clicked and picked color 
            if (clickedColor === pickedColor) {
               messageDisplay.textContent = "Correct"
               // call the function
               changeColor(clickedColor);
               h1display.style.background = clickedColor;
               resetButton.textContent = "Play Again"
            } else { 
                messageDisplay.textContent = "Try Again"
                // when i clicked wrong color matches with bg color
                this.style.background = "#110a01";
    
            }
        });
    }
}

function reset() {
    colors = getramdomColor(numSquare);
    pickedColor = pickColor();
    messageDisplay.textContent = " "
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Color"
    for (let i = 0; i < square.length; i++) {
        if(colors[i]){
            square[i].style.display = "block";
            square[i].style.background = colors[i];
        } else {
               square[i].style.display = "none";
        }
        square[i].style.background = colors[i];
        h1display.style.background= "steelblue";
        }

}

resetButton.addEventListener("click", function() {
        reset();
    });

function changeColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }
}
// create the function for ramdomly pick the color
function pickColor() {
   let random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

//create the function for random colors
function getramdomColor(num) {
    // create array
    let arr = [];
    //loop repeat num times
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr
}

//create the function for rangomcolors
function randomColor() {
    //random num for red color
    let r = Math.floor(Math.random() * 256);
    //random num for green color
    let g = Math.floor(Math.random() * 256);
    //random num for blue color
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}