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
        images = {},
        canvas,
        ctx,
        now = +new Date(),
        imagesToLoad = 0,
        imagesLoaded = 0,
        running = false;

    function loadImageCallback () {
        imagesLoaded += 1;
    }

    function load (options, cb) {
        var i, l;

        canvas = options.canvasEl;
        ctx = canvas.getContext("2d");

        for (i = 0, l = options.images.length; i < l; i += 1) {
            var imageObject = options.images[i],
                image = new Image();

            imagesToLoad += 1;
            image.src = imageObject.src;
            image.onload = loadImageCallback;

            images[imageObject.id] = image;
        }

        var intervalId = setInterval(function () {
            if (imagesToLoad === imagesLoaded) {
                clearInterval(intervalId);
                cb();
            }
        }, 0);
    }

    function start () {
        running = true;
        loop();
    }

    function addEntity (entity) {
        entities.push(entity);
    }

    function getImage (imageId) {
        return images[imageId];
    }

    function render (ctx) {
        var i, l;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (i = 0, l = entities.length; i < l; i += 1) {
            entities[i].render(ctx);
        }
    }

    function update (dt) {
        var i, l;

        for (i = 0, l = entities.length; i < l; i += 1) {
            entities[i].update(dt);
        }
    }

    function loop () {
        var dt = (+new Date()) - now;

        if (running) {
            requestAnimationFrame(loop);
            update(dt);
            render(ctx);
        }

        now  = +new Date();
    }

    return {
        load: load,
        start: start,
        addEntity: addEntity,
        getImage: getImage
    };
}());
