function update_player_position(playerNumber, trackPosition) {
    $("#player" + playerNumber + "track td").removeClass("active");
    $("#player" + playerNumber + "track :nth-child(" + trackPosition + ")").addClass("active");
}

$(document).ready(function(){
    var player1counter = 1;
    var player2counter = 1;

//bind player keys & movement
    $(document).keyup(function(e) {
        var code = e.keyCode || e.which;
        if (code == 80) { //Enter keycode
           // console.log(player1counter);
           player1counter++;
           update_player_position(1, player1counter);
         } else if (code == 81 ) {
            // console.log(player2counter);
            player2counter++;
            update_player_position(2, player2counter);
         }// end of if else if

            //starting position
                    if (player1counter + player2counter == 2) {
                        console.log("starting position");
                        $(".racer_table").after("<span id='startingPosition'>Start your engines!</span>");
                    }
                    if (player1counter + player2counter > 2) {
                        console.log(player1counter + player2counter);
                        $("span").hide();
                    }

            // ending position
            if (player1counter  == 12) {
                    console.log(player1counter);
                    $(".racer_table").after("<span id='startingPosition'>Player 1 Wins!</span>");
                    $(document).unbind("keyup");
             }
             if (player2counter  == 12) {
                    console.log(player1counter);
                    $(".racer_table").after("<span id='startingPosition'>Player 2 Wins!</span>");
                    $(document).unbind( "keyup");
             }
    }); // end of keyup





}); // end of doc ready