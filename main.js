function adjcells(x,y)
{
    let cells = [];
    cells.push([x+1,y]);
    cells.push([x-1,y]);
    cells.push([x,y+1]);
    cells.push([x,y-1]);
    cells.push([x-1,y-1]);
    cells.push([x+1,y+1]);
    cells.push([x-1,y+1]);
    cells.push([x+1,y-1]);
    return cells;
}

function checks(grid,adjcells)
{
    let out = [];
    for(let cell of adjcells)
    {
        if(
            cell[1] >= 0 && cell[1] < grid.length && 
            cell[0] >= 0 && cell[0] < grid[cell[1]].length
          ) 
          {
            out.push(grid[cell[1]][cell[0]] === 1?true:false);
          }
    }
    return out;
}   

function count(arr)
{
    let count = 0;
    for(let i of arr) if(i) count++;
    return count;
}

function iterate(grid)
{
    let next = [];
    for(let y in grid)
    {
        next.push([]);
        for(let x in grid[y])
        {
            current = grid[y][x];
            alive = count(checks(grid,adjcells(parseInt(x),parseInt(y))));
            if(current == 1 && alive < 2) next[y][x] = 0;
            else if(current == 1 && alive > 3) next[y][x] = 0;
            else if(current == 1 && alive === 2 || alive === 3) next[y][x] = 1;
            else if(current == 0 && alive === 3) next[y][x] = 1;
            else next[y][x] = 0;
        }
    }
    return next;
}

function printGrid(grid)
{
    let str = "";
    for(let y in grid)
    {
        for(let x in grid[y])
        {
            c = grid[y][x];
            if(c == 0) str += "_ ";
            else str += "* ";
        }
        str += "\n";
    }
    return str;
}

// Blinker
let g1 = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
for(let i = 0;i < 3;i++)
{
    console.log(printGrid(g1));
    g1 = iterate(g1);
}

// Beacon
g1 = [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,1,1,0,0],
        [0,0,0,1,1],
        [0,0,0,1,1]
    ];
for(let i = 0;i < 3;i++)
{
    console.log(printGrid(g1));
    g1 = iterate(g1);
}

// Toad
g1 = [
        [0,0,0,0,0],
        [0,1,1,1,0],
        [1,1,1,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ];
for(let i = 0;i < 3;i++)
{
    console.log(printGrid(g1));
    g1 = iterate(g1);
}