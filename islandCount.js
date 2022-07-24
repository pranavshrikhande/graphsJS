const islandCount = (grid)=>{
    const visited = new Set();

    let count=0

    for(let r=0;r<grid.length;r++)

    {
        for(let c=0;c < grid[0].length;c++)
        {
            if(explore(grid,r,c,visited)===true)
            {
                count +=1;
            }
        }
    }
return count;
}

const explore=(grid,r,c,visited)=>{
    
    const rowInBounds =  (0<=r && r< grid.length);

    const columnInBounds = (0<= c && c<grid[0].length);

    //Invalid position
    if(!rowInBounds || !columnInBounds) return false;

    if(grid[r][c]==='W') return false;
    
    
    const pos = r+','+c;

    if(visited.has(pos)) return false;

    visited.add(pos);

    //DFS traversal
    explore(grid,r-1, c,visited);
    explore(grid,r+1,c,visited)
    explore(grid,r,c-1,visited);
    explore(grid, r, c+1,visited);


    return true;

}

const grid=[
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','L'],
    ['L','L','W','W','W']
];



let res = islandCount(grid);

console.log(res);