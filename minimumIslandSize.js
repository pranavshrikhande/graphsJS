const minimumIslandSize=(grid)=>{


let visited = new Set();


let min = Number.MAX_VALUE;

for(let r=0;r<grid.length;r++)
{
    for(let c=0;c<grid[0].length;c++)
    {
        const size = exploreGraph(grid,r,c,visited);

        if(size>0 && size<min)
        {
            min = size;
        }
    }
}


return min;

}



const exploreGraph=(grid,r,c,visited)=>
{

    let rowInBounds = (0<=r && r<grid.length);

    let colInBounds = (0<=c && c<grid[0].length);

    if(!rowInBounds || !colInBounds)
    {
        return 0;
    }

    if(grid[r][c]=='W')
    {
        return 0;
    }

    let pos = r+','+c;

    if(visited.has(pos))
    {
        return 0;
    }

    visited.add(pos);

    let size=1;

    size += exploreGraph(grid,r-1,c,visited);
    size += exploreGraph(grid,r+1,c,visited);

    size += exploreGraph(grid,r,c-1,visited);
    size += exploreGraph(grid,r,c+1,visited);

    return size;

}




const grid=[
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','L'],
    ['L','L','W','W','W']
];

/*
[
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','L'],
    ['L','L','W','W','W']
];
*/

let res = minimumIslandSize(grid);

console.log(res);