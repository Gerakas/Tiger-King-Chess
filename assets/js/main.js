$(document).ready(function() {


    // Object that defines the x and y values in each tile on the board.
    const tiles = {
        A8 : { valueX : 1, valueY : 8 },
        A7 : { valueX : 1, valueY : 7 },
        A6 : { valueX : 1, valueY : 6 },
        A5 : { valueX : 1, valueY : 5 },
        A4 : { valueX : 1, valueY : 4 },
        A3 : { valueX : 1, valueY : 3 },
        A2 : { valueX : 1, valueY : 2 },
        A1 : { valueX : 1, valueY : 1 },
        B8 : { valueX : 2, valueY : 8 },
        B7 : { valueX : 2, valueY : 7 },
        B6 : { valueX : 2, valueY : 6 },
        B5 : { valueX : 2, valueY : 5 },
        B4 : { valueX : 2, valueY : 4 },
        B3 : { valueX : 2, valueY : 3 },
        B2 : { valueX : 2, valueY : 2 },
        B1 : { valueX : 2, valueY : 1 },
        C8 : { valueX : 3, valueY : 8 },
        C7 : { valueX : 3, valueY : 7 },
        C6 : { valueX : 3, valueY : 6 },
        C5 : { valueX : 3, valueY : 5 },
        C4 : { valueX : 3, valueY : 4 },
        C3 : { valueX : 3, valueY : 3 },
        C2 : { valueX : 3, valueY : 2 },
        C1 : { valueX : 3, valueY : 1 },

    };

    const tileValues = Object.values(tiles);

    $(".chess-piece").click(function() {

        $("div").removeClass("tileSelected");
        $("div").removeClass("potentialTileMovement");


        // The event handler that retrieves the ID of the tile containing the clicked chess piece.
        let parentTile = $(this).parent().attr("id");

        // Highlights the tile the pawn piece is on.
        $(this).parent().toggleClass("tileSelected");

        // The loop that iterates through the tiles keys and compares them with the tile's ID that the clicked pawn piece is placed on.
        for (let anyTile in tiles) {

            if (anyTile == parentTile) {

                // Gets x and y values of the tile the clicked pawn is on.
                let currentTileValues = tiles[anyTile];

                // Checks for type of pawn piece
                if ($(this).hasClass("fa-chess-pawn")) {

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
                            function getPropByValue(object, value) { 
                                for (var prop in object) { 
                                    if (object.hasOwnProperty(prop)) { 
                                        if (object[prop] === value) 
                                        return prop; 
                                    } 
                                } 
                            } 
                    
                            let tileProperty = getPropByValue(tiles, tileValues[i]); 
                            
                            $(`#${tileProperty}`).addClass("potentialTileMovement");
                        }

                    }
                
                } 

            } else {
                continue;
            }
            
        }
    });

});
