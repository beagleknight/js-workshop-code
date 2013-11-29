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
    function init (keyMapActions) {
        $(document).on('keydown', function (event) {
            var action = keyMapActions[lut[event.keyCode]],
                playerId = seatsController.getPlayerSelectedId();

            if (action && playerId) {
                $(document).trigger(playerId + action);
                event.preventDefault();
                //TODO
                /*
                 * Emit the 'player action' event passing the same
                 * event triggered as playerAction data
                 */
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
                //TODO
                /*
                 * Emit the 'player action' event passing the same
                 * event triggered as playerAction data
                 */
            }
        });

        //TODO
        /*
         * Bind the 'player action' and trigger playerAction
         * from data using $(documente).trigger
         */
    }

    return {
        init: init
    };
});
