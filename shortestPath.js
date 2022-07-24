const shortestPath =(edges, nodeA,nodeB)=>{

    const graph = buildGraph(edges);

    let visited = new Set([ nodeA ]);

    const queue = [[nodeA, 0]];

    while(queue.length>0)
    {
        const [node , distance] = queue.shift();

        if(node===nodeB)
        {
            return distance;
        }

        for(let neighbour of graph[node])
        {
            if(!visited.has(neighbour))
            {
             visited.add(neighbour);   
            queue.push([neighbour, distance+1]);
            }
        }
    }

    return -1;

}

const buildGraph = (edges)=>{

    const adjList={};

    for(let edge of edges)
    {
        const [ a ,b ]= edge;

        if(!(a in adjList))
        {
            adjList[a]=[]
        }

        if(!(b in adjList))
        {
            adjList[b]=[];
        }
        adjList[a].push(b);

        adjList[b].push(a);
    }

    return adjList;

}

const edges=[
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
];

let res = shortestPath(edges,'w','z');

console.log(res);