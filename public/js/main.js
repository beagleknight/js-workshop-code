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

        seatsController.init($('.seat'), socket);

        gamePad.init({
            'KEY_D' : 'MoveRight',
            'KEY_A' : 'MoveLeft',
            'KEY_W' : 'MoveUp',
            'KEY_S' : 'MoveDown'
        }, socket);

        game.load({ 
            canvasEl: canvasEl, 
            images: [
                { id: 'crate', src: 'images/crate.png' }
            ]
        }, function () {
            socket.on("getPlayerPositions", function (playerPositions) {
                game.addEntity(player({
                    id: 'player1',
                    collisionGroup: 'players',
                    hp: 10,
                    position: playerPositions.player1
                }));

                game.addEntity(player({
                    id: 'player2',
                    collisionGroup: 'players',
                    hp: 10,
                    position: playerPositions.player2
                }));

                game.addEntity(player({
                    id: 'player3',
                    collisionGroup: 'players',
                    hp: 10,
                    position: playerPositions.player3
                }));

                game.addEntity(player({
                    id: 'player4',
                    collisionGroup: 'players',
                    hp: 10,
                    position: playerPositions.player4
                }));
            });

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
            socket.emit("game started");
        });
    });
});
