const graph ={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const depthFirstSearch= (graph, source)=>{
    console.log(source)

    for(let neighbour of graph[source])
    {   
        depthFirstSearch(graph,neighbour);
    };





}

depthFirstSearch(graph, 'a');