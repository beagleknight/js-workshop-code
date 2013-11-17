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

    return that;
};
