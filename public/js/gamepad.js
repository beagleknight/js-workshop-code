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

    function init (keyMapActions, socket) {
        $(document).on('keydown', function (event) {
            var action = keyMapActions[lut[event.keyCode]],
                playerId = seatsController.getPlayerSelectedId();

            if (action && playerId) {
                $(document).trigger(playerId + action);
                event.preventDefault();
                socket.emit("player action", { playerAction: playerId + action });
            }
        });

        $(document).on('keyup', function () {
            var playerId = seatsController.getPlayerSelectedId();

            if (playerId) {
                $(document).trigger(playerId + 'Halt', { socket: socket });
                socket.emit("player action", { playerAction: playerId + 'Halt' });
            }
        });

        socket.on("player action", function (data) {
            $(document).trigger(data.playerAction);
        });
    }

    return {
        init: init
    };
});
