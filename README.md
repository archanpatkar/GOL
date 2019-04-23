# GOL
Game of Life implemented in Node.js

## Usage
```
let g1 = [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,1,1,0,0],
        [0,0,0,1,1],
        [0,0,0,1,1]
    ];
for(let i = 0;i < 1000;i++)
{
    console.log(printGrid(g1));
    g1 = iterate(g1);
}
```

## Screenshots
<table>
<tr>
  <td><h4>Blinker</h4><img src="./one.png"/></td>
  <td><h4>Beacon</h4><img src="./two.png"/></td>
  <td><h4>Toad</h4><img src="./three.png"/></td>
</tr>
</table>
