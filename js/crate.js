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
        HP = 3;

    /*
     * TIP #1: HP is private and shared with all instances.
     * Think about it as a constant. Use it to initialize spec.hp
     */

    /*
     * TIP #2: Use the superMethod method in utils.js for creating a
     * super method for entity render and update methods.
     */

    /*
     * TIP #3: Retrieve the image using game getImage method
     */

    return that;
};
