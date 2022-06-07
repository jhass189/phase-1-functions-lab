function distanceFromHqInBlocks(start) {
    console.log(start)
    if (start < 42) {
        return 42 - start
    } else {
        return start - 42
    }
}

function distanceFromHqInFeet(start) {
    distanceFromHqInBlocks(start);
    if (start < 42) {
        return (42 - start) * 264
    } else {
        return (start - 42) * 264
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    console.log(distanceTravelledInFeet(start, destination))
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return (0)
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02



    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}