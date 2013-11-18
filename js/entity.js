var MYGAME = MYGAME || {};

/**
 * entity constructor function
 *
 * An entity is the minimum object of our game. It is represented
 * as a simple position and velocity on both axis.
 * Use simple objects with x and y attributes.
 *
 * Public methods:
 *
 * getX:
 * - return position on x axis
 * getY:
 * - return position on y axis
 * getVx:
 * - return velocity on x axis
 * getVy:
 * - return velocity on y axis
 * render:
 * - receives a canvas context
 * - render axis for a player. Use simple red and green lines. Check
 *   drawAxis private attribute.
 *   for x and y axis.
 * update:
 * - receives elapsed time (in ms) since last frame
 * - update position based on velocity
 */
MYGAME.entity = function (spec) {
    var that = {},
        drawAxis = true;

    that.getX = function () {
        return spec.position.x;
    };
    
    that.getY = function () {
        return spec.position.y;
    };

    that.getVx = function () {
        return spec.velocity.x;
    };

    that.getVy = function () {
        return spec.velocity.y;
    };

    that.render = function (ctx) {
        var position = spec.position;

        if (drawAxis) {
            ctx.save();
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(position.x, position.y);
            ctx.lineTo(position.x + 100, position.y);
            ctx.stroke();
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.moveTo(position.x, position.y);
            ctx.lineTo(position.x, position.y + 100);
            ctx.stroke();
            ctx.restore();
        }
    };

    that.update = function (dt) {
        spec.position.x += spec.velocity.x * dt / 1000;
        spec.position.y += spec.velocity.y * dt / 1000;
    };

    return that;
};
