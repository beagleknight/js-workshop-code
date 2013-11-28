define(function (require) {
    var game   = require('game'),
        entity = require('entity'),
        utils  = require('utils'),
        crate;

    crate = function (spec) {
        var that = entity(spec),
            HP = 3,
            image = game.getImage('crate'),
            entityRender = utils.superMethod(that, 'render'),
            entityUpdate = utils.superMethod(that, 'update');

        spec.velocity = { x: 0, y: 0 };
        that.hp = HP;

        that.render = function (ctx) {
            entityRender(ctx);
            ctx.drawImage(image, spec.position.x, spec.position.y);
        };

        that.update = function (dt) {
            entityUpdate(dt);
        };

        that.isBroken = function () {
            return that.hp <= 0;
        };

        return that;
    };

    return crate;
});
