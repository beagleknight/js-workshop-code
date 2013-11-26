define(function () {
    var utils = {};

    /**
     * superMethod
     *
     * creates a function which freezes an object and a method.
     * Useful for creating super methods in functional inheritance pattern.
     */
    utils.superMethod = function (object, name) {
        var that = object,
            method = that[name];
        
        return function () {
            return method.apply(that, arguments);
        };
    };

    return utils;
});
