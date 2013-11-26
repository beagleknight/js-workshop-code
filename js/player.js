define(function (require) {
    var entity = require('entity'),
        utils  = require('utils'),
        player;

    player = function (spec) {
        var that = entity(spec),
            entityRender = utils.superMethod(that, 'render'),
            entityUpdate = utils.superMethod(that, 'update');
     
        that.render = function (ctx) {
            entityRender(ctx);
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.arc(spec.position.x, spec.position.y, 10, 0, 2 * Math.PI);
            ctx.fill();
        };

        that.update = function (dt) {
            entityUpdate(dt);
        };

        that.isDead = function () {
            return that.hp <= 0;
        };


        return that;
    };

    return player;
});
