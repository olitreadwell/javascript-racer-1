function update_player_position(playerNumber, trackPosition) {
    $("#player" + playerNumber + "track td").removeClass("active");
    $("#player" + playerNumber + "track :nth-child(" + trackPosition + ")").addClass("active");
}

$(document).ready(function(){
        var player1counter = 2;
        var player2counter = 2;

    $(document).keyup(function(e) {
        var code = e.keyCode || e.which;
        if (code == 80) { //Enter keycode
           player1counter
           update_player_position(1, player1counter);
           player1counter++;
         } else if (code == 81 ) {
            console.log(player2counter)
            update_player_position(2, player2counter);
            player2counter++;
         }// end of if else if
    }); // end of keyup
}); // end of doc ready