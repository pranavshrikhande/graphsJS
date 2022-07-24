const undirectedGraph=(edges, nodeA, nodeB )=>{
    const graph = buildGraph(edges);
    console.log(graph)

    //Once graph is build, we implement hasPath

    return hasPathFunc(graph, nodeA, nodeB, new Set());
};

const hasPathFunc = (graph, src, dst, visited)=>{
    
    // Checks for cycle, else we go into infinited loop/ recusrion
    if(visited.has(src))
    {
        return false;
    }

    //this checks if src has been visited
    visited.add(src);

    if(src===dst) return true;

    for(let neighbour of graph[src])
    {
        if(hasPathFunc(graph, neighbour,dst,visited)===true)
        {
            return true;
        }
    }

    return false;
}

const buildGraph=(edges)=>{
 
    const graph = {};

    for(let edge of edges)
    {
        const [a , b] = edge;

        if(!(a in graph))
        {
            graph[a]=[];
        }

        if(!(b in graph))
        {
            graph[b]=[];
        }

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

undirectedGraph(edges,'j','m');

