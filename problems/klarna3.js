function findRoutes(routes) {
    let routeTaken = [], nextDestination = '';
    const formatted = routes.reduce((formatted, route) => {
        formatted.boarding.push(route[0]);
        formatted.destination.push(route[1]);
        return formatted;
    }, {
        boarding: [],
        destination: []
    });
    // find the starting destination
    const startingPoint = formatted.boarding.filter(str => !formatted.destination.includes(str))[0];
    routeTaken.push(startingPoint);
    nextDestination = startingPoint;

    formatted.boarding.forEach(element => {
        nextDestination = formatted.destination[formatted.boarding.indexOf(nextDestination)];
        routeTaken.push(nextDestination);
    });
    
    return routeTaken.join(',');
}

const result = findRoutes([
    ['USA', 'BRA'],
    ['JPN', 'PHL'],
    ['BRA', 'UAE'],
    ['UAE', 'JPN']
]);
console.log(result);