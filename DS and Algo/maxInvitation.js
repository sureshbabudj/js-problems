import Graph from "./Graph.js";

function isCycleExist(node, visited, recStack, result) {
    for (let i = 0; i.l)
}

function bfs(start) {
    const result = [];
    const visited = {}, recStack = {};
    visited[start] = true;
    recStack[start] = true;
    const queue = [start]; 
    let currentVertex;
    while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacentList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
            if (!recStack[neighbor]) {
                recStack[neighbor] = true;
            } else {
                return result;
            }
            if (this.isCycleExist(neighbor, visited, recStack, result)) {
                return result;
            }
        });
    }
    return result;
}

var maximumInvitations = function (fav) {
    const empGraph = new Graph();
    empGraph.bfs = bfs.bind(empGraph);
    empGraph.isCycleExist = isCycleExist.bind(empGraph);
    for (let i = 0; i < fav.length; i++) {
        empGraph.addVertex(i);
    }
    for (let i = 0; i < fav.length; i++) {
        empGraph.addEdge(i, fav[i]);
    }
    empGraph.showConnections();
    const helper = (start) => {
        if (start >= empGraph.numberOfNodes) return 0;
        const res = empGraph.bfs(start);
        console.log(res);
        return Math.max(helper(++start), res.length);
    }
    return helper(0);
};

console.log(maximumInvitations([3, 0, 1, 4, 1])) // 4
console.log(maximumInvitations([2, 2, 1, 2]))  // 3
// [3,0,1,4,1]

// 0 => 3
// 1 => 0
// 2 => 1
// 3 => 4
// 4 => 1

//  0 