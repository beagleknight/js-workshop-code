var MYGAME = MYGAME || {};

/**
 * game module
 *
 * Public methods:
 *
 * load:
 * - receive an object with the following attributes
 *   => canvas element
 *   => array of objects with image id and path. Ex: [{ id: 'crate', src: 'images/crate.png' }]
 * - receive a callback function when loading finishes
 * - must initialize game attributes and load images
 *
 * addEntity:
 * - add an entity to the game loop
 *
 * getImage:
 * - receives an id of an image and returns it
 *
 * start:
 * - start the game loop
 *
 * Private methods:
 *
 * render: 
 * - receives a canvas ctx as an argument
 * - calls render method for all entities
 * update: 
 * - receive elapsed time (ms) since previous frame
 * - calls update method for all entities
 * loop: 
 * - use requestAnimationFrame and call update and render
 * - compute elapsed time since previous loop and pass it to update
 * - pass a valid canvas ctx to render
 */
MYGAME.game = (function () {
    var entities = [],
        images = {};

    /*
     * TIP #1: when loading images, use a counter for images to load
     * and images loaded.
     */

    /*
     * TIP #2: use +new Date to get the current time in milliseconds
     */

    /*
     * TIP #3: create a private variable to save game's state or
     * a simple boolean variable called running
     */

    return {
    };
}());
