function update_player_position(playerNumber, trackPosition){
    $("#player"+playerNumber+"track :nth-child("+trackPosition+2")").css("background-color", "black");
};

$(function(){
    update_player_position(1,5);
    update_player_position(2,5);
});