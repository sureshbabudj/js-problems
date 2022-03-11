export default class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {
        };
    }
    addVertex(node) {
        if (this.adjacentList[node]) {
            return this;
        }
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        //directed Graph 
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            return this;
        }
        this.adjacentList[node1].push(node2);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

Graph.prototype.bfs = function (start) {
    const queue = [start];
    const result = [];
    const visited = {
        [start]: true
    };
    let currentVertex;
    while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacentList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}
