






const hasPath = (graph, src,dst)=>{

     const queue = [ src ];

     while(queue.length>0)
     {
              
        const current = queue.shift()

        if(current===dst) return true;

        for(let neighbour of graph[current])
        {
            queue.push(neighbour);
        }

     }
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


