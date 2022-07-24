const hasPath = (graph, src, dst)=>{

    if(src===dst) return true;

    for(let neighbour of graph[src])
    {
        
        if(hasPath(graph,neighbour,dst)=== true)
        {
            console.log(true)
            return true;
        }
    }
    console.log(false)
    return false;
}


let graph ={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
};


hasPath(graph,'f','k')


