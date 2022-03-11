function canVisitAllRooms(rooms) {

    const visitedRooms = [];
    const availbleKeys = [];

    availbleKeys.push(...rooms[0]);
    visitedRooms.push(0);

    while (availbleKeys.length > 0) {
        const currRoom = availbleKeys.shift();
        if(!visitedRooms.includes(currRoom)) {
            visitedRooms.push(currRoom);
        }
        if (rooms[currRoom].length > 0) {
            rooms[currRoom].forEach((element) => {
                if(!visitedRooms.includes(element)) {
                    availbleKeys.push(element);
                }
            });
        }
    }



    return rooms.length === visitedRooms.length;
}

console.log(canVisitAllRooms([
    [0,3], // Room 0 has key for room 3
    [], // Room 1 has no keys
    [1], // Room 2 has key for room 1
    [0,2,3], // Room 3 has keys for rooms 0, 2 and itself
    [5], // Room 4 has key for room 5
    [4], // Room 5 has key for room 4
  ]
  ));