requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': '../bower_components/jquery/jquery'
    }
});

define(function (require) {
    var $      = require('jquery'),
        game   = require('game'),
        entity = require('entity'),
        player = require('player'),
        crate  = require('crate');

    $(function () {
        var canvasEl = $('#gameCanvas')[0];

        /*
         * Use $ to find our canvas element and pass it to game load method.
         * Also pass an object with the images to load (view module game)
         */
        game.load({ 
            canvasEl: canvasEl, 
            images: [
                { id: 'crate', src: 'images/crate.png' }
            ]
        }, function () {
            /*
             * When our game is loaded. Create a few entities like players or
             * crates on random positions and add them to our game. Then start.
             * Try different velocities as well for players and see the results.
             */
            var e1 = entity({
                position: {
                    x: 50,
                    y: 50
                },
                velocity: {
                    x: 0,
                    y: 0
                }
            });

            game.addEntity(e1);

            var p1 = player({
                hp: 10,
                position: {
                    x: 100,
                    y: 300
                },
                velocity: {
                    x: 30,
                    y: 0
                }
            });

            game.addEntity(p1);

            var p2 = player({
                hp: 10,
                position: {
                    x: 100,
                    y: 400
                },
                velocity: {
                    x: 60,
                    y: 30 
                }
            });

            game.addEntity(p2);

            var c1 = crate({
                position: {
                    x: 200,
                    y: 100
                },
                velocity: {
                    x: 0,
                    y: 0
                }
            });

            game.addEntity(c1);

            game.start();
        });
    });
});
