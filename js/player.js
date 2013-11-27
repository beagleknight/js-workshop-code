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
            this.velocity.x = 10;
        };

        that.moveLeft = function () {
            this.velocity.x = -10;
        };

        that.moveUp = function () {
            this.velocity.y = 10;
        };

        that.moveDown = function () {
            this.velocity.y = -10;
        };

        that.halt = function () {
            this.velocity = { x: 0, y: 0 };
        };

        //TODO
        /**
         * Bind gamePad events using player id
         *
         * Example:
         * If player id is 'player1', then events must be like
         * 'player1MoveRight', 'player1MoveLeft', etc.
         */
        $(document).on(spec.id + 'Halt', $.proxy(that.halt, that));

        return that;
    };

    return player;
});
