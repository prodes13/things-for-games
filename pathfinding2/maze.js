let canvas;
let ctx;
let output;



const WIDTH = 1200;
const HEIGHT = 800;

let tileW = 20;
let tileH = 20;

let tileRowCount = 25;
let tileColumnCount = 40;
dragok = false;

boundX = 0;
boundY = 0;

let tiles = [];


function reset() {
    for (let i = 0; i < tileColumnCount; i++) {
        tiles[i] = [];
        for(let j=0; j<tileRowCount; j++) {
            tiles[i][j] = {x: (tileW + 3) * i, y:( tileH + 3) * j, state: 'e'}; // state is e for empty
        }
    }
    
    tiles[0][0].state = 's'; //start tile
    tiles[tileColumnCount-1][tileRowCount-1].state = 'f'; // finish tile

    output.innerHTML = '';
}

function *solveMaze() {
    let Xqueue = [0];
    let Yqueue = [0];

    let pathFound = false;

    let xLoc, yLoc;

    while(Xqueue.length > 0 && !pathFound) {
        xLoc = Xqueue.shift();
        yLoc = Yqueue.shift();
        // see if it is finish
        if (xLoc > 0) {
            if(tiles[xLoc-1][yLoc].state == 'f') {
                pathFound = true;
            }
        }
        if(xLoc < tileColumnCount - 1) {
            if(tiles[xLoc+1][yLoc].state == 'f') {
                pathFound = true;
            }
        }
        if (yLoc > 0) {
            if(tiles[xLoc][yLoc-1].state == 'f') {
                pathFound = true;
            }
        }
        if(yLoc < tileRowCount - 1) {
            if(tiles[xLoc][yLoc+1].state == 'f') {
                pathFound = true;
            }
        }
        
        // neighbours
        if (xLoc > 0) {
            if(tiles[xLoc-1][yLoc].state == 'e') {
                Xqueue.push(xLoc - 1)
                Yqueue.push(yLoc);
                tiles[xLoc - 1][yLoc].state = tiles[xLoc][yLoc].state + 'l';
            }
        }
        if(xLoc < tileColumnCount - 1) {
            if(tiles[xLoc+1][yLoc].state == 'e') {
                Xqueue.push(xLoc + 1)
                Yqueue.push(yLoc);
                tiles[xLoc + 1][yLoc].state = tiles[xLoc][yLoc].state + 'r';
            }
        }
        if (yLoc > 0) {
            if(tiles[xLoc][yLoc-1].state == 'e') {
                Xqueue.push(xLoc)
                Yqueue.push(yLoc - 1);
                tiles[xLoc][yLoc - 1].state = tiles[xLoc][yLoc].state + 'u';
            }
        }
        if(yLoc < tileRowCount - 1) {
            if(tiles[xLoc][yLoc+1].state == 'e') {
                Xqueue.push(xLoc)
                Yqueue.push(yLoc + 1);
                tiles[xLoc][yLoc + 1].state = tiles[xLoc][yLoc].state + 'd';
            }
        }
        yield pathFound;
    }
    if(!pathFound) {
        output.innerHTML = 'No Solution!';
    } else {
        output.innerHTML = 'Solved!';
        let path = tiles[xLoc][yLoc].state;
        let pathLengh = path.length;
        let currX = 0;
        let currY = 0;
        for (let i = 0; i < pathLengh - 1; i++) {
            if(path.charAt(i+1) == 'u') {
                currY -= 1;
            }
            if(path.charAt(i+1) == 'd') {
                currY += 1;
            }
            if(path.charAt(i+1) == 'r') {
                currX += 1;
            }
            if(path.charAt(i+1) == 'l') {
                currX -= 1;
            }
            tiles[currX][currY].state = 'x';
        }
    }
}

function rect(x, y, w, h, state) {
    //red red green green blue blue
    switch(state) {
        case 's':
            ctx.fillStyle = "#00ff00"; 
            break;
        case 'f':
            ctx.fillStyle = "#ff0000"; 
            break;
        case 'e':
            ctx.fillStyle = "#AAAAAA"; 
            break;
        case 'w':
            ctx.fillStyle = "#0000ff"; 
            break;
        case 'x':
            ctx.fillStyle = "#000000"; 
            break;
        default:
            ctx.fillStyle = "#ffff00";
            break;
    }
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
    clear();

    for ( let i =0; i<tileColumnCount; i++) {
        for (let j=0; j<tileRowCount; j++) {
            rect(tiles[i][j].x, tiles[i][j].y, tileW, tileH, tiles[i][j].state);
        }
    }
}

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    output = document.getElementById("outcome");
    var solve = solveMaze();
    reset();
    function anim(){
        draw();
        solve.next(); // call next iteration of the bubbleSort function
    }
    anim();
    setInterval(anim, 100);
}

function myMove(e) {
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;
   for (let i = 0; i < tileColumnCount; i++) {
       for (let j = 0; j < tileRowCount; j++) {
           if(i*(tileW+3) < x && x < i*(tileW + 3) + tileW &&
               j * (tileH + 3) < y && y < j*(tileH + 3) + tileH
           ) {
               if(tiles[i][j].state == 'e' && i!= boundX || j != boundY) {
                   tiles[i][j].state = 'w';
                   boundX = i;
                   boundY = j;
               }
               else if(tiles[i][j].state == 'w' && i!= boundX || j != boundY) {
                   tiles[i][j].state = 'e';
                   boundX = i;
                   boundY = j;
               }
           }
       }
   }
}

function myDown(e) {
    canvas.onmousemove = myMove;

     x = e.pageX - canvas.offsetLeft;
     y = e.pageY - canvas.offsetTop;
    for (let i = 0; i < tileColumnCount; i++) {
        for (let j = 0; j < tileRowCount; j++) {
            if(i*(tileW+3) < x && x < i*(tileW + 3) + tileW &&
                j * (tileH + 3) < y && y < j*(tileH + 3) + tileH
            ) {
                if(tiles[i][j].state == 'e') {
                    tiles[i][j].state = 'w';
                    boundX = i;
                    boundY = j;
                }
                else if(tiles[i][j].state == 'w') {
                    tiles[i][j].state = 'e';
                    boundX = i;
                    boundY = j;
                }
            }
        }
    }
    
}

function myUp() {
    canvas.onmousemove = null;
}

init();
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
