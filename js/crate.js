var MYGAME = MYGAME || {};

/**
 * crate constructor function
 *
 * A crate is a breakable entity. Also our players will
 * collide with them.
 *
 * Public methods:
 *
 * isBroken:
 * - return true if hp is equal or less than 0
 * render:
 * - receive a canvas context
 * - call entity's render method first
 * - draw an image or whatever you want
 * update:
 * - receives elapsed time (in ms) since last frame
 * - just call entity's update method for now
 */
var game = MYGAME.game,
    entity = MYGAME.entity;

MYGAME.crate = function (spec) {
    var that = entity(spec),
        HP = 3,
        image = game.getImage('crate'),
        entityRender = UTILS.superMethod(that, 'render'),
        entityUpdate = UTILS.superMethod(that, 'update');

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
