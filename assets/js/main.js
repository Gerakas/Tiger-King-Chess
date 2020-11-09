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

        // The loop that iterates through the tileValue object and compares
        // it's values with the tile's ID that the clicked pawn piece is placed on.
        for (let anyTile in tiles) {


            if (anyTile == parentTile) {
                // console.log("it works!")
                
                // Highlights the tile the pawn piece is on.
                $(this).parent().toggleClass("tileSelected");

                // Gets x and y values of tile the clicked pawn is on.
                let currentTileValues = tiles[anyTile];
                
                // Calculates x and y co-ordinates of potential tiles the pawn
                // piece is allowed to move to.
                let potentialMoves = {
                    valueX: currentTileValues.valueX,
                    valueY: currentTileValues.valueY - 1,
                }
                // console.log(potentialMoves);
                
                for (i=0; i < tileValues.length; i++) {
                    console.log(tileValues[i]);

                    if (tileValues[i] == potentialMoves) {
                        alert("Got it");
                        
                    }
            
                }


            } else {
                continue;
            }
            
        }
    });

});
