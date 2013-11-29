define(function () {
    var playerSelectedId, $seats;

    function sit (event) {
        var playerName = window.prompt("What's your name?"),
            target     = $(event.currentTarget),
            seat       = target.parents('.seat');

        playerSelectedId = target.data('player-id');
        $('.sit').attr('disabled', true);

        seat.find('.name').html(playerName);
        seat.find('.standup').attr('disabled', false);

        //TODO
        /*
         * Emit an event 'player sit' to the server 
         * with the player's id and player's name
         */
    }

    function standUp (event) {
        var target = $(event.currentTarget),
            seat   = target.parents('.seat');

        playerSelectedId = null;
        target.attr('disabled', true);

        $seats.find('.sit:not(.network)').attr('disabled', false);
        seat.find('.name').html('unknown');

        //TODO
        /*
         * Emit an event 'player stand' to the server 
         * with the player's id
         */
    }

    function networkPlayerSit(data) {
        var playerId   = data.playerId,
            playerName = data.playerName,
            sitButton  = $seats.find('.sit[data-player-id = "' + playerId + '"]');

        sitButton.addClass('network');
        sitButton.attr('disabled', true);
        sitButton.parents('.seat').find('.name').html(playerName);
    }

    function networkPlayerStand(data) {
        var playerId   = data.playerId,
            sitButton  = $seats.find('.sit[data-player-id = "' + playerId + '"]');

        sitButton.removeClass('network');
        sitButton.attr('disabled', false);
        sitButton.parents('.seat').find('.name').html('unknown');
    }

    function getPlayerSelectedId () {
        return playerSelectedId;
    }

    //TODO
    /*
     * Add the socket parameter to init and save it in a variable
     */
    function init (selector) {
        $seats = selector;
        $seats.find('.sit').on('click', sit);
        $seats.find('.standup').on('click', standUp);
        playerSelectedId = null;

        //TODO
        /*
         * Bind event 'player sit' to networkPlayerSit function
         */

        //TODO
        /*
         * Bind event 'player stand' to networkPlayerStand function
         */
    }

    return {
        init: init,
        getPlayerSelectedId: getPlayerSelectedId
    };
});
