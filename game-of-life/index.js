const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 40;
canvas.width = 400;
canvas.height = 400;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

function buildGrid() {
    return new Array(COLS).fill(null)
        .map(() => new Array(ROWS).fill(null)
        .map(() => Math.floor(Math.random() * 2)));
}

const grid = buildGrid();

render(grid);

// rendering next generation

function nextGen(grid) {
    const nextGen = grid.map(arr => [...arr]);
    
    for(let col = 0; col < grid.length; col++) {
        for(let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            const numNeighbours = 0;
            for(let i = -1; i < 2; i++) {
                for(let j =-1; j < 2; j++) {
                    if( i === 0 && j === 0) {
                        continue;
                    }
                    const currentNeighbour = grid[col+i][row+j];
                    numNeighbours += currentNeighbour;
                }
            }
        }
    }
}

function render(grid) { 
    for(let col = 0; col < grid.length; col++) {
        for(let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];

            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution);
            ctx.fillStyle = cell ? 'black' : 'white';
            ctx.fill();
            ctx.stroke();
        }
    }
}