var UTILS = UTILS || {};

/**
 * superMethod
 *
 * creates a function which freezes an object and a method.
 * Useful for creating super methods in functional inheritance pattern.
 */
UTILS.superMethod = function (object, name) {
    var that = object,
        method = that[name];
    
    return function () {
        return method.apply(that, arguments);
    };
};
