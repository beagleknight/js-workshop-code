requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': '../bower_components/jquery/jquery'
    }
});

define(function (require) {
    var $                   = require('jquery'),
        game                = require('game'),
        player              = require('player'),
        crate               = require('crate'),
        seatsController     = require('seats_controller'),
        gamePad             = require('gamepad');

    $(function () {
        var canvasEl = $('#gameCanvas')[0];

        seatsController.init($('.seat'));
        gamePad.assignKeys('player1', {
            'KEY_D' : 'MoveRight',
            'KEY_A' : 'MoveLeft',
            'KEY_W' : 'MoveUp',
            'KEY_S' : 'MoveDown'
        });
        gamePad.assignKeys('player2', {
            'KEY_RIGHT_ARROW' : 'MoveRight',
            'KEY_LEFT_ARROW'  : 'MoveLeft',
            'KEY_UP_ARROW'    : 'MoveUp',
            'KEY_DOWN_ARROW'  : 'MoveDown'
        });

        game.load({ 
            canvasEl: canvasEl, 
            images: [
                { id: 'crate', src: 'images/crate.png' }
            ]
        }, function () {
            game.addEntity(player({
                id: 'player1',
                collisionGroup: 'players',
                hp: 10,
                position: {
                    x: 100,
                    y: 300
                }
            }));

            game.addEntity(player({
                id: 'player2',
                collisionGroup: 'players',
                hp: 10,
                position: {
                    x: 700,
                    y: 300
                }
            }));

            game.addEntity(crate({
                collisionGroup: 'crates',
                position: {
                    x: 200,
                    y: 100
                }
            }));

            game.addEntity(crate({
                collisionGroup: 'crates',
                position: {
                    x: 400,
                    y: 200
                }
            }));

            game.addEntity(crate({
                collisionGroup: 'crates',
                position: {
                    x: 500,
                    y: 400
                }
            }));

            game.start();
        });
    });
});
