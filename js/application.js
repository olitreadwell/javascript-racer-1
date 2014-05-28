function winningScenario(playerCounter, playerNumber){
    var finishLine = ($("td").size()/2)
    var raceTrack = $(".racer_table")
    if (playerCounter  == finishLine) {
            console.log(playerCounter);
            raceTrack.after("<span id='startingPosition'>Player " + playerNumber + " Wins!</span>");
            $(document).unbind("keyup");
     }
}

function Player (trackNumber, keyCode) {
    this.trackNumber= trackNumber;
    this.code = keyCode;
    this.position = 1;
}

Player.prototype.advancePlayer = function(){
    this.position++;
}

Player.prototype.updatePlayerPosition = function(){
    $("#player" + this.trackNumber + "track td").removeClass("active");
    $("#player" + this.trackNumber + "track :nth-child(" + this.position + ")").addClass("active");
}

$(document).ready(function(){
    var player1 = new Player(1, 80);
    var player2 = new Player(2, 81);
    var raceTrack = $(".racer_table");
    var players = [ player1, player2 ];

    $(document).keyup(function(e) {
        var keyCode = e.keyCode || e.which;
        for (var i  = 0; i < players.length; i ++) {
            if (players[i].code == keyCode) {
                console.log("player" + players[i].trackNumber + " is currently at position " + players[i].position)
                players[i].advancePlayer();
                players[i].updatePlayerPosition();
            }
        }

            //starting position
                    if (player1.position + player2.position == 2) {
                        console.log("starting position");
                        raceTrack.after("<span id='startingPosition'>Start your engines!</span>");
                    }
                    if (player1.position + player2.position > 2) {
                        console.log(player1.position + player2.position);
                        $("span").hide();
                    }

            // ending position
            winningScenario(player1.position, player1.trackNumber);
            winningScenario(player2.position, player2.trackNumber);
    }); // end of keyup
}); // end of doc ready



