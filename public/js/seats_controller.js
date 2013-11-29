define(function () {
    var playerSelectedId, $seats, socket;

    function sit (event) {
        var playerName = window.prompt("What's your name?"),
            target     = $(event.currentTarget),
            seat       = target.parents('.seat');

        playerSelectedId = target.data('player-id');
        $('.sit').attr('disabled', true);

        seat.find('.name').html(playerName);
        seat.find('.standup').attr('disabled', false);

        socket.emit("player sit", {
            playerId: playerSelectedId,
            playerName: playerName
        });
    }

    function standUp (event) {
        var target = $(event.currentTarget),
            seat   = target.parents('.seat');

        target.attr('disabled', true);

        $seats.find('.sit:not(.network)').attr('disabled', false);
        seat.find('.name').html('unknown');

        socket.emit("player stand", {
            playerId: playerSelectedId,
        });

        playerSelectedId = null;
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

    function init (selector, s) {
        socket = s;
        $seats = selector;
        $seats.find('.sit').on('click', sit);
        $seats.find('.standup').on('click', standUp);
        playerSelectedId = null;

        socket.on("player sit", networkPlayerSit);
        socket.on("player stand", networkPlayerStand);
    }

    return {
        init: init,
        getPlayerSelectedId: getPlayerSelectedId
    };
});
