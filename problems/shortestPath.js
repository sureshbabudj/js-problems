// Shortest Path
// Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

// An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.
// Examples
// Input: ["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]
// Output: A-C-D-F
// Input: ["4","X","Y","Z","W","X-Y","Y-Z","X-W"]
// Output: X-

function ShortestPath(routes) {
    const numOfPlaces = routes.shift();
    const graph = buildRoutes(routes, numOfPlaces);
    const start = routes[0], dest = routes[numOfPlaces - 1];
    const queue = [start];
    const routeHash = {};
    routeHash[start] = true;

    while(queue.length !== 0){
        const curr = queue.shift();
        for (let i = 0; i < graph[curr].length; i++) {
            if(!routeHash[graph[curr][i]]) {
                routeHash[graph[curr][i]] = curr;
                queue.push(graph[curr][i]);
            }
        }
    }
    console.log(routeHash);
}

function buildRoutes(routes, numOfPlaces) {
    let routesTaken = routes.splice(numOfPlaces);
    let map = [];
    for (let i = 0; i < routesTaken.length; i++) {
        let route = routesTaken[i].split('-');
        if(!map[route[0]]) {
            map[route[0]] = [route[1]];
        } else {
            map[route[0]].push(route[1]);
        }
        if(!map[route[1]]) {
            map[route[1]] = [route[0]];
        } else {
            map[route[1]].push(route[0]);
        }
    }
    return map;
}
     
  // keep this function call here 
console.log(ShortestPath(["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]));