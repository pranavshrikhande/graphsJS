const connectedComponentCount = (graph)=>{

const visited = new Set();
let count = 0;

for(let node in graph)
{
    if(explore(graph,node,visited)=== true)
    {
        count += 1;
    }

}
console.log(count);
return count;    
}

const explore =(graph, current,visited)=>{
    if(visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neighbour of graph[current])
    {
        explore(graph, neighbour,visited);
    }

    return true;
}

connectedComponentCount({
    1:[2],
    2:[1],
    3:[],
    4:[6],
    5:[6],
    6:[4,5,7,8],
    7:[6],
    8:[6]
})

/*
test00:
{
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}

test 02
{
    1:[2],
    2:[1],
    3:[],
    4:[6],
    5:[6],
    6:[4,5,7,8],
    7:[6],
    8:[6]
}
*/