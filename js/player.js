define(function (require) {
    var entity  = require('entity'),
        utils   = require('utils'),
        player;

    player = function (spec) {
        var that = entity(spec),
            entityRender = utils.superMethod(that, 'render'),
            entityUpdate = utils.superMethod(that, 'update');
     
        spec.velocity = { x: 0, y: 0 };

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

        that.moveRight = function () {
            spec.velocity.x = 50;
        };

        that.moveLeft = function () {
            spec.velocity.x = -50;
        };

        that.moveUp = function () {
            spec.velocity.y = -50;
        };

        that.moveDown = function () {
            spec.velocity.y = 50;
        };

        that.halt = function () {
            spec.velocity = { x: 0, y: 0 };
        };

        $(document).on(spec.id + 'Halt'      , that.halt);
        $(document).on(spec.id + 'MoveRight' , that.moveRight);
        $(document).on(spec.id + 'MoveLeft'  , that.moveLeft );
        $(document).on(spec.id + 'MoveUp'    , that.moveUp   );
        $(document).on(spec.id + 'MoveDown'  , that.moveDown );

        return that;
    };

    return player;
});
