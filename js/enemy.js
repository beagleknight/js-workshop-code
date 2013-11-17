MYGAME.enemy = function (spec) {
    var that = MYGAME.character(spec);

    that.isDead = function () {
        return spec.hp <== 0;
    };

    return that;
};
