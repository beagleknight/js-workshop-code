requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'io': '/socket.io/socket.io'
    }
});

define(function (require) {
    var $               = require('jquery'),
        game            = require('game'),
        player          = require('player'),
        crate           = require('crate'),
        seatsController = require('seats_controller'),
        gamePad         = require('gamepad'),
        io              = require('io');

    $(function () {
        var canvasEl = $('#gameCanvas')[0],
            socket   = io.connect();

        //TODO
        /*
         * seatsController module will need the socket in
         * order to control ocuppied seats.
         */
        seatsController.init($('.seat'));

        //TODO
        /*
         * gamePad module will need the socket in order to 
         * send player's action to other clients
         */
        gamePad.init({
            'KEY_D' : 'MoveRight',
            'KEY_A' : 'MoveLeft',
            'KEY_W' : 'MoveUp',
            'KEY_S' : 'MoveDown'
        });

        game.load({ 
            canvasEl: canvasEl, 
            images: [
                { id: 'crate', src: 'images/crate.png' }
            ]
        }, function () {
            //TODO
            /*
             * Server will send the player's positions so bind an event
             * called 'getPlayerPositions' and initialize players with
             * correct positions.
             */
            game.addEntity(player({
                id: 'player1',
                collisionGroup: 'players',
                hp: 10,
                position: {
                    x: 100,
                    y: 200
                }
            }));

            game.addEntity(player({
                id: 'player2',
                collisionGroup: 'players',
                hp: 10,
                position: {
                    x: 100,
                    y: 400
                }
            }));

            game.addEntity(player({
                id: 'player3',
                collisionGroup: 'players',
                hp: 10,
                position: {
                    x: 700,
                    y: 200
                }
            }));

            game.addEntity(player({
                id: 'player4',
                collisionGroup: 'players',
                hp: 10,
                position: {
                    x: 700,
                    y: 400
                }
            }));

            game.addEntity(crate({
                collisionGroup: 'crates',
                position: {
                    x: 400,
                    y: 100
                }
            }));

            game.addEntity(crate({
                collisionGroup: 'crates',
                position: {
                    x: 400,
                    y: 450
                }
            }));

            game.start();

            //TODO
            /*
             * Emit the event 'game started' to the server
             */

        });

        //TODO
        /*
         * Remove the following code, it's just a HelloWorld
         * for test purpouses
         */
        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
        });
    });
});
