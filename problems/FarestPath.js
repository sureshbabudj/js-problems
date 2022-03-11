// Farthest Nodes
// Have the function FarthestNodes(strArr) read strArr which will be an array of hyphenated letters representing paths between those two nodes. For example: ["a-b","b-c","b-d"] means that there is a path from node a to b (and b to a), b to c, and b to d. Your program should determine the longest path that exists in the graph and return the length of that path. So for the example above, your program should return 2 because of the paths a-b-c and d-b-c. The path a-b-c also means that there is a path c-b-a. No cycles will exist in the graph and every node will be connected to some other node in the graph.
// Examples
// Input: ["b-e","b-c","c-d","a-b","e-f"]
// Output: 4
// Input: ["b-a","c-e","b-c","d-c"]
// Output: 3

function FarthestNodes(strArr) {

    const graph = {};
    strArr.forEach(function (edge) {
        var nodes = edge.split('-');
        buildGraph(graph, nodes[0], nodes[1]);
        buildGraph(graph, nodes[1], nodes[0]);
    });

    //find the last node
    let n1 = bfs(graph, Object.keys(graph)[0]);

    Object.keys(graph).forEach(function (k) {
        graph[k].distance = Infinity;
    });

    let n2 = bfs(graph, n1);
    return graph[n2].distance;
}

function bfs(graph, node) {
    let que = [],
        curr;
    graph[node].distance = 0;
    que.push(node);
    while (que.length > 0) {
        curr = que.shift();
        graph[curr].neighbors.forEach((item) => {
            if (graph[item].distance === Infinity) {
                graph[item].distance = graph[curr].distance + 1;
                que.push(item);
            }
        });
    }
    return curr;
}


function buildGraph(graph, v1, v2) {
    if (!graph[v1]) {
        graph[v1] = {
            distance: Infinity,
            neighbors: []
        };
    }
    graph[v1].neighbors.push(v2);
}

// keep this function call here 
console.log(FarthestNodes(["b-e", "b-c", "c-d", "a-b", "e-f"]));