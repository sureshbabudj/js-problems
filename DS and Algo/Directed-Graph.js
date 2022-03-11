class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        let temp = new Node(data);
        temp.next = this.head;
        this.head = temp;
        return this;
    }
    getHead() {
        return this.head;
    }
}
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.list = [];
        for (let i = 0; i < vertices; i++) {
            let temp = new LinkedList();
            this.list.push(temp);
        }
    }
    addEdge(source, destination) {
        if (source < this.vertices && destination < this.vertices) {
            this.list[source].insertAtHead(destination);
        }
        return this;
    }
}

const Colors = {
    WHITE: 'white',
    GRAY: 'gray',
    BLACK: 'black'
}
Object.freeze(Colors);

function isDeadlocked(g) {
    let color = [];
    for (let i = 0; i < g.vertices; i++) {
        color[i] = Colors.WHITE;
    }
    for (let i = 0; i < g.vertices; i++) {
        if (color[i] == Colors.WHITE) {
            if (detectCycle(g, i, color)) {
                return true;
            }
        }
    }
    return false;
};

function detectCycle(g, currentVertex, color) {
    color[currentVertex] = Colors.GRAY;
    let neighbor;
    let nextNode = g.list[currentVertex].getHead();
    while (nextNode !== null) {
        neighbor = nextNode.data;
        if (color[neighbor] == Colors.GRAY) {
            return true;
        }
        if (color[neighbor] == Colors.WHITE && detectCycle(g, neighbor, color)) {
            return true;
        }
    }
    color[currentVertex] = Colors.BLACK;
    return false;
}



var maximumInvitations = function (fav) {
    const empGraph = new Graph(fav.length);
    for (let i = 0; i < fav.length; i++) {
        empGraph.addEdge(i, fav[i]);
    }
    const helper = (start) => {
        if (start >= empGraph.vertices) return 0;
        const res = bfs(start);
        console.log(res);
        return Math.max(helper(++start), res.length);
    }
    // return helper(0);
};


let input =  [3, 0, 1, 4, 1];
let g = new Graph(input.length);
for (let i = 0; i < input.length; i++) {
    g.addEdge(i, input[i]);
}
console.log(isDeadlocked(g));

console.log(maximumInvitations(input));
