var MYGAME = MYGAME || {};

/**
 * player constructor function
 *
 * A player is an entity with more attributes. Also it will
 * server as an avatar for our players.
 *
 * Public methods:
 *
 * getHp:
 * - return player's hp
 * isDead:
 * - return true if hp is equal or less than 0
 * render:
 * - receive a canvas context
 * - call entity's render method first
 * - draw an image or whatever you want
 * update:
 * - receives elapsed time (in ms) since last frame
 * - just call entity's update method for now
 */
var entity = MYGAME.entity;

MYGAME.player = function (spec) {
    var that = entity(spec),
        entityRender = UTILS.superMethod(that, 'render'),
        entityUpdate = UTILS.superMethod(that, 'update');
 
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
