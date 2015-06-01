var Server = function(worldReference) {
    var mPlayers = null;
    var mGameStartState = null;
    var mWorld = worldReference;
    var mGameStarted = false;
    
    // Public
    this.update = function() {
        //console.log("p",mPlayers[0].isFacingRight);
    };

    this.createId = function(){
        if (mPlayers != null){
            // Crear el nuevo id para el player que lo solicita
            var str1 = "Player";
            var id = str1.concat(mPlayers.length+1);
            mPlayers[mPlayers.length] = new Object();
            mPlayers[mPlayers.length-1].id = id;
            mPlayers[mPlayers.length-1].readyState = false;
            mPlayers[mPlayers.length-1].lifes = 3;
            mPlayers[mPlayers.length-1].kills = 0;
            mPlayers[mPlayers.length-1].x = 0;
            mPlayers[mPlayers.length-1].y = 0;
            mPlayers[mPlayers.length-1].isFacingRight = false;
            return(mPlayers[mPlayers.length-1].id);
        }
        return "has provocado un problema y no mereces un id digno";
    };

    this.changeReadyState = function(playerId, readyState){
        if (!mGameStarted){
            var sum = 0;
            mPlayers.forEach(function(player) {
                if (player.id.valueOf() == playerId.valueOf()){
                    player.readyState = readyState;
                }
                if (player.readyState) sum++;
                if (sum == mPlayers.length) mGameStarted = true;
            });
        }
    };

    this.getPlayers = function(){
        return mPlayers;
    };

    this.getGameStarted = function() {
        return mGameStarted;
    };

    this.sendPlayerNewPosition = function(playerId, playerPosition, playerFacingRight){
        mPlayers.forEach(function(player) {
            if (player.id.valueOf() == playerId.valueOf()){
                player.x = playerPosition.x;
                player.y = playerPosition.y;
                player.isFacingRight = playerFacingRight;
            }
        });
    };
    this.attack = function(playerId){
        mPlayers.forEach(function(player) {
            if (player.id.valueOf() == playerId.valueOf()){
                // Check if kill someone
                // if (kill) killed -1 life; killer +1 score;
                console.log("ataquen");
            }
        });
    };
    
    
    // Constructor
    (function() {
       gameStartState = false;
       mPlayers = new Array();
    })();
};