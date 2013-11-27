define(function () {
    var playerSelectedId;

    function chooseSeat (event) {
        var target = $(event.currentTarget);
        playerSelectedId = target.data('player-id');

        // Halt both players when changing seat
        $(document).trigger('player1Halt');
        $(document).trigger('player2Halt');
    }

    function getPlayerSelectedId () {
        return playerSelectedId;
    }

    function init (selector) {
        var $seats = selector;

        //TODO
        /**
         * Bind $seats click event to chooseSeat function
         */
    }

    return {
        init: init,
        getPlayerSelectedId: getPlayerSelectedId
    };
});
