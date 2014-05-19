function update_player_position(playerNumber, trackPosition) {
    $("#player" + playerNumber + "track td").removeClass("active");
    $("#player" + playerNumber + "track :nth-child(" + trackPosition + ")").addClass("active");
}

$(document).ready(function(){

    $(document).keyup(function(e) {
        var code = e.keyCode || e.which;
        if (code == 80) { //Enter keycode
           console.log("move player 1")
         } else if (code == 81 ) {
            console.log("move player 2")
         }
    }); // end of keyup
    // update_player_position(1,5);
    // update_player_position(2,5);

}); // end of doc ready