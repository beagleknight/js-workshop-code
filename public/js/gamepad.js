define(function (require) {
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


    //TODO
    /*
     * Add the socket parameter
     */
    function assignKeys (keyMapActions) {
        $(document).on('keydown', function (event) {
            var action = keyMapActions[lut[event.keyCode]],
                playerId = seatsController.getPlayerSelectedId();

            if (action && playerId) {
                $(document).trigger(playerId + action);
                event.preventDefault();
            }
        });

        $(document).on('keyup', function () {
            var playerId = seatsController.getPlayerSelectedId();

            if (playerId) {
                //TODO
                /*
                 * Pass the socket parameter to the event data
                 */
                $(document).trigger(playerId + 'Halt');
            }
        });
    }

    return {
        assignKeys: assignKeys
    };
});
