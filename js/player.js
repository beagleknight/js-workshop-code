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
var game = MYGAME.game,
    entity = MYGAME.entity;

MYGAME.player = function (spec) {
    var that = entity(spec);

    /*
     * TIP #1: Use the superMethod method in utils.js for creating a
     * super method for entity render and update methods.
     */

    /*
     * TIP #2: Retrieve the image using game getImage method
     */

    return that;
};
