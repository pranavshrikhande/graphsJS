const graph ={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};


const deapthFirstSearch= (graph, source)=>{

const stack=[ source ];

while(stack.length >0)
{
    const current = stack.pop();

    console.log(current);
    
    for(let neighbour of graph[current])
    {
        stack.push(neighbour);
    }

}

};

deapthFirstSearch(graph,'a');

//a b d f c e