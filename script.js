let box1El = document.getElementById("box1");
let box2El = document.getElementById("box2");
let box3El = document.getElementById("box3");
let box4El = document.getElementById("box4");
let box5El = document.getElementById("box5");
let box6El = document.getElementById("box6");
let box7El = document.getElementById("box7");
let box8El = document.getElementById("box8");
let box9El = document.getElementById("box9");
let buttonEl = document.getElementById("btn");
let boxEl = document.getElementById("box");
let displayEl = document.getElementById("display");


let Game = true;
let Xplayer = true;
let arr = [".", ".",".",".",".",".",".",".","."];



buttonEl.addEventListener("click", clearPage);
function clearPage () {
    box1El.style.backgroundColor = "white";
    box2El.style.backgroundColor = "white";
    box3El.style.backgroundColor = "White";
    box4El.style.backgroundColor = "white";
    box5El.style.backgroundColor = "White";
    box6El.style.backgroundColor = "white";
    box7El.style.backgroundColor = "white";
    box8El.style.backgroundColor = "white";
    box9El.style.backgroundColor = "white";
    box1El.innerHTML = " ";
    box2El.innerHTML = " ";
    box3El.innerHTML = " ";
    box4El.innerHTML = " ";
    box5El.innerHTML = " ";
    box6El.innerHTML = " ";
    box7El.innerHTML = " ";
    box8El.innerHTML = " ";
    box9El.innerHTML = " ";

    location.reload();
}



const cellClick = (e) => {
    const location = e.target.id;
    
        if (Xplayer === true && location === "box1" ) {
            if (arr[0] === "X" || arr[0] === "O") {
                return;
            } else {
                arr.splice(0, 1, "X");
                box1El.innerHTML = "X";
                box1El.style.color = "red";
                box1El.style.backgroundColor = "grey";
                console.log(arr);
                console.log(Xplayer);
            }  
        } if (Xplayer === false && location === "box1" ) {
            if (arr[0] === "X" || arr[0] === "O") {
                return;
            } else {
                box1El.innerHTML = "O";
                box1El.style.color = "yellow";
                box1El.style.backgroundColor = "grey";
                arr.splice(0, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        } if (Xplayer === true && location === "box2" ) {
            if (arr[1] === "X" || arr[1] === "O") {
                return;
            } else {
                box2El.innerHTML = "X";
                box2El.style.color = "red";
                box2El.style.backgroundColor = "grey";
                arr.splice(1, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        } if (Xplayer === false && location === "box2" ) {
            if (arr[1] === "X" || arr[1] === "O") {
                return;
            } else {
                box2El.innerHTML = "O";
                box2El.style.color = "yellow";
                box2El.style.backgroundColor = "grey";
                arr.splice(1, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }   if (Xplayer === true && location === "box3" ) {
            if (arr[2] === "X" || arr[2] === "O") {
                return;
            } else {
                box3El.innerHTML = "X";
                box3El.style.color = "red";
                box3El.style.backgroundColor = "grey";
                arr.splice(2, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        }   if (Xplayer === false && location === "box3" ) {
            if (arr[2] === "X" || arr[2] === "O") {
                return;
            } else {
                box3El.innerHTML = "O";
                box3El.style.color = "yellow";
                box3El.style.backgroundColor = "grey";
                arr.splice(2, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === true && location === "box4" ) {
            if (arr[3] === "X" || arr[3] === "O") {
                return;
            } else {
                box4El.innerHTML = "X";
                box4El.style.color = "red";
                box4El.style.backgroundColor = "grey";
                arr.splice(3, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === false && location === "box4" ) {
            if (arr[3] === "X" || arr[3] === "O") {
                return;
            } else {
                box4El.innerHTML = "O";
                box4El.style.color = "yellow";
                box4El.style.backgroundColor = "grey";
                arr.splice(3, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === true && location === "box5" ) {
            if (arr[4] === "X" || arr[4] === "O") {
                return;
            } else {
                box5El.innerHTML = "X";
                box5El.style.color = "red";
                box5El.style.backgroundColor = "grey";
                arr.splice(4, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === false && location === "box5" ) {
            if (arr[4] === "X" || arr[4] === "O") {
                return;
            } else {
                box5El.innerHTML = "O";
                box5El.style.color = "yellow";
                box5El.style.backgroundColor = "grey";
                arr.splice(4, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === true && location === "box6" ) {
            if (arr[5] === "X" || arr[5] === "O") {
                return;
            } else {
                box6El.innerHTML = "X";
                box6El.style.color = "red";
                box6El.style.backgroundColor = "grey";
                arr.splice(5, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        } if (Xplayer === false && location === "box6" ) {
            if (arr[5] === "X" || arr[5] === "O") {
                return;
            } else {
                box6El.innerHTML = "O";
                box6El.style.color = "yellow";
                box6El.style.backgroundColor = "grey";
                arr.splice(5, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === true && location === "box7" ) {
            if (arr[6] === "X" || arr[6] === "O") {
                return;
            } else {
                box7El.innerHTML = "X";
                box7El.style.color = "red";
                box7El.style.backgroundColor = "grey";
                arr.splice(6, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === false && location === "box7" ) {
            if (arr[6] === "X" || arr[6] === "O") {
                return;
            } else {
                box7El.innerHTML = "O";
                box7El.style.color = "yellow";
                box7El.style.backgroundColor = "grey";
                arr.splice(6, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === true && location === "box8" ) {
            if (arr[7] === "X" || arr[7] === "O") {
                return;
            } else {
                box8El.innerHTML = "X";
                box8El.style.color = "red";
                box8El.style.backgroundColor = "grey";
                arr.splice(7, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        } if (Xplayer === false && location === "box8" ) {
            if (arr[7] === "X" || arr[7] === "O") {
                return;
            } else {
                box8El.innerHTML = "O";
                box8El.style.color = "yellow";
                box8El.style.backgroundColor = "grey";
                arr.splice(7, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === true && location === "box9" ) {
            if (arr[8] === "X" || arr[8] === "X") {
                return;
            } else {
                box9El.innerHTML = "X";
                box9El.style.color = "red";
                box9El.style.backgroundColor = "grey";
                arr.splice(8, 1, "X");
                console.log(arr);
                console.log(Xplayer);
            }
        }  if (Xplayer === false && location === "box9" ) {
            if (arr[8] === "X" || arr[8] === "O") {
                return;
            } else {
                box9El.innerHTML = "O";
                box9El.style.color = "yellow";
                box9El.style.backgroundColor = "grey";
                arr.splice(8, 1, "O");
                console.log(arr);
                console.log(Xplayer);
            }
        }  
        Xplayer = !Xplayer;
        console.log(Xplayer);

                for (let spot in arr) {
                    if ((arr[0] === "X" && arr[4] === "X" && arr[8]=== "X")  || (arr[0] === "X"&& arr[1]=== "X" && arr[2]=== "X") || (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") || (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") || (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") || (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") || (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") || (arr[2] === "X" && arr[4] === "X" && arr[6] === "X")) {
                        displayEl.textContent = "X wins"
                        displayEl.style.color = "red";
                        displayEl.style.fontSize = "30px";
                        boxEl.addEventListener("click", boxClick);
                    } if ((arr[0] === "O" && arr[4] === "O" && arr[8]=== "O")  || (arr[0] === "O"&& arr[1]=== "O" && arr[2]=== "O") || (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") || (arr[0] === "O" && arr[3] === "O" && arr[6] === "O") || (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") || (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") || (arr[6] === "O" && arr[7] === "O" && arr[8] === "O") || (arr[2] === "O" && arr[4] === "O" && arr[6] === "O")) {
                        displayEl.textContent = "O wins"
                        displayEl.style.color = "yellow";
                        displayEl.style.backgroundColor = "grey";
                        displayEl.style.fontSize = "30px";
                        boxEl.addEventListener("click", boxClick);
                    } if ((arr[0] === "X" || arr[0] === "O") && (arr[1] === "X" || arr[1] === "O") && (arr[2] === "X" || arr[2] === "O") && (arr[3] === "X" || arr[3] === "O") && (arr[4] === "X" || arr[4] === "O") && (arr[5] === "X" || arr[5] === "O") && (arr[6] === "X" || arr[6] === "O") && (arr[7] === "X" || arr[7] === "O") && (arr[8] === "X" || arr[8] === "O")) {
                        if ((arr[0] === "X" && arr[4] === "X" && arr[8]=== "X")  || (arr[0] === "X"&& arr[1]=== "X" && arr[2]=== "X") || (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") || (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") || (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") || (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") || (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") || (arr[2] === "X" && arr[4] === "X" && arr[6] === "X")) {
                            displayEl.textContent = "X wins"
                            displayEl.style.color = "red";
                            displayEl.style.fontSize = "30px";
                        }else if ((arr[0] === "O" && arr[4] === "O" && arr[8]=== "O")  || (arr[0] === "O"&& arr[1]=== "O" && arr[2]=== "O") || (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") || (arr[0] === "O" && arr[3] === "O" && arr[6] === "O") || (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") || (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") || (arr[6] === "O" && arr[7] === "O" && arr[8] === "O") || (arr[2] === "O" && arr[4] === "O" && arr[6] === "O")) {
                            displayEl.textContent = "O wins"
                            displayEl.style.color = "yellow";
                            displayEl.style.backgroundColor = "grey";
                            displayEl.style.fontSize = "30px";
                        } else {
                        displayEl.textContent = "tie";
                        displayEl.style.fontSize = "30px";
                    }
                    
        }
    }
}

box1El.addEventListener("click", cellClick);
box2El.addEventListener("click", cellClick);
box3El.addEventListener("click", cellClick);
box4El.addEventListener("click", cellClick);
box5El.addEventListener("click", cellClick);
box6El.addEventListener("click", cellClick);
box7El.addEventListener("click", cellClick);
box8El.addEventListener("click", cellClick);
box9El.addEventListener("click", cellClick);


const boxClick = (e) => {
    box1El.removeEventListener("click", cellClick);
    box2El.removeEventListener("click", cellClick)
    box3El.removeEventListener("click", cellClick)
    box4El.removeEventListener("click", cellClick)
    box5El.removeEventListener("click", cellClick)
    box6El.removeEventListener("click", cellClick)
    box7El.removeEventListener("click", cellClick)
    box8El.removeEventListener("click", cellClick)
    box9El.removeEventListener("click", cellClick)
}
    
        