
function FarthestNodes(routes) {
    const destinations = routes.splice(0, routes.shift());
    const routeTaken = routes.splice(0, destinations.length);
    const graph = {}, que = [], result = {};
    destinations.forEach((item) => {
        result[item] = {
            path : '',
            cost: Infinity
        };
    });
    const start = destinations[0];
    result[start].path = true;
    result[start].cost = 0;
    que.push(start);
    buildGraph(graph, routeTaken);

    while(que.length > 0) {
        const curr = que.shift();
        graph[curr].forEach( (ele) => {
            const data = ele.split('-');
            const item = data[0],cost = data[1];
            if(result[item].cost > result[curr].cost) {
                result[item].path = curr;
                result[item].cost = cost;
                que.push(item);
            }
            prev = item;
        });

    }
   return result;
}


function buildGraph(graph, routeTaken) {
    routeTaken.forEach( (item) => {
        const data = item.split('-');
        const start = data[0];
        const end = data[1];
        const cost = data[2];
        if(graph[start]) {
            graph[start].push(end + '-' + cost);
        } else {
            graph[start] = [end + '-' + cost];
        }
        if(graph[end]) {
            graph[end].push(start+ '-' + cost);
        } else {
            graph[end] = [start + '-' + cost];
        }
    });
}

// keep this function call here 
console.log(FarthestNodes(["5","A","B","C","D","F","A-B-1","A-C-10","B-C-1","C-D-3","D-F-4"]));