function getPossibleMoves(x, y, n) {
    if(x > n || y > n) {
        document.getElementById('result').innerHTML = 'Starting coordinate is outside of the board';
        console.log('Starting coordinate is outside of the board');
        return;
    }

    const possibleCoordinates = [];

    //Find all possible X Positions
    const cellXpositions = [x + 2, x - 2, x + 1, x - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    });
    
    //Find all possible Y Positions
    const cellYpositions = [y + 2, y - 2, y + 1, y - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    });

    //We now have 2 seperate arrays: One for X Positions, One for Y Positions.
    //Go thru every combination possible and if it is a valid position then push it
    //to the possible coordinates array - if not present already.
    //The trick is to validate the position pair (X, Y) by making sure that 
    //the net X distance plus net Y distance is 3
    for (let i = 0; i < cellXpositions.length; i++) {
        for (let j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(x - cellXpositions[i]) + Math.abs(y - cellYpositions[j]) === 3) {
                //console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
                } 
            }
        }
    }
    
    console.log('Possible Coordinates:', possibleCoordinates);
    console.log ('Possible Moves:', possibleCoordinates.length);
    document.getElementById('result').innerHTML = 'Possible Moves: ' + possibleCoordinates.length + '<br />';
    document.getElementById('result').innerHTML += 'Possible Coordinates: ' + JSON.stringify(possibleCoordinates);
    return possibleCoordinates.length;
}

function addClickListener() {
    document.getElementById('handleClick').addEventListener('click', function(el, event) {
        const x = document.getElementById('x').value;
        const y = document.getElementById('y').value;
        const size = document.getElementById('size').value;
        document.getElementById('result').innerHTML = '';
        getPossibleMoves(+x, +y, +size);
    });
}