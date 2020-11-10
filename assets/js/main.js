$(document).ready(function() {


    // Object that defines the x and y values in each tile on the board.
    const tiles = {
        A7 : { valueX : 1, valueY : 7 },
        A6 : { valueX : 1, valueY : 6 },
        B7 : { valueX : 2, valueY : 7 }
    };

    const tileValues = Object.values(tiles);

    $(".chess-piece").click(function() {

        // The event handler that retrieves the ID of the tile containing 
        // the clicked chess piece.
        let parentTile = $(this).parent().attr("id");
        //console.log(parentTile);

        // Highlights the tile the pawn piece is on.
        $(this).parent().toggleClass("tileSelected");

        // The loop that iterates through the tiles keys and compares
        // them with the tile's ID that the clicked pawn piece is placed on.
        for (let anyTile in tiles) {

            if (anyTile == parentTile) {

                // Gets x and y values of the tile the clicked pawn is on.
                let currentTileValues = tiles[anyTile];
                
                // Calculates x and y co-ordinates of potential tiles the pawn piece is allowed to move to.
                let potentialMoves = {
                    valueX: currentTileValues.valueX,
                    valueY: currentTileValues.valueY - 1,
                }


                // The loop that iterates through the tileValues and compares
                // the values with the potentialMoves the pawn can make.
                for (i = 0; i < tileValues.length; i++) {
                
                    if (potentialMoves.valueX == tileValues[i].valueX && potentialMoves.valueY == tileValues[i].valueY) {
                        console.log(tileValues[i]); 

                        // This function, that finds an objects property through its values was provided by
                        // https://www.geeksforgeeks.org/how-to-get-a-key-in-a-javascript-object-by-its-value/
                        function getKeyByValue(object, value) { 
                            for (var prop in object) { 
                                if (object.hasOwnProperty(prop)) { 
                                    if (object[prop] === value) 
                                    return prop; 
                                } 
                            } 
                        } 
                
                        let tileProperty = getKeyByValue(tiles, tileValues[i]); 
                        
                        $(`#${tileProperty}`).addClass("potentialTileMovement");
                    }

                }


            } else {
                continue;
            }
            
        }
    });

});
