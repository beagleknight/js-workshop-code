define(function () {
    var seatsController = require('seats_controller'),
        lut = {
            37: "KEY_LEFT_ARROW",
            38: "KEY_UP_ARROW",
            39: "KEY_RIGHT_ARROW",
            40: "KEY_DOWN_ARROW",
            87: "KEY_W",
            65: "KEY_A",
            83: "KEY_S",
            68: "KEY_D"
        };

    function assignKeys (playerId, keyMapActions) {
        //TODO
        /**
         * Bind keydown events based on keyMapActions
         * and playerId value.
         * Tip #1: Use lut object with event.keyCode
         */

        // Halt player if keyup event happens
        $(document).on('keyup', function (event) {
            if (playerId === seatsController.getPlayerSelectedId()) {
                $(document).trigger(playerId + 'Halt');
            }
        });
    }

    return {
        assignKeys: assignKeys
    };
});
