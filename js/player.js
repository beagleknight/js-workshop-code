MYGAME.player = function (spec) {
    var that = MYGAME.character(spec);

    var haveAP = function () {
        return spec.ap > 0
    };

    that.attack = function (enemy) {
        if (haveAP) {
            if(!enemy.isDead()) {
                damage = spec.strength - enemy.defense;
                if (damage > 0) {
                    enemy.hp -= damage;
                    console.log("Player " + spec.name + " inflicts " + damage + " damage to enemy " + enemy.name);
                } else {
                    console.log("Player " + spec.name + " cannot damage enemy " + name);
                }
                spec.ap -= 1
            } else {
                console.log("Player " + spec.name + " try to damage enemy " + enemy.name + " but it's already dead!");
            }
        } else {
            console.log("Player " + spec.name + " doesn't have enough ap");
        }
    };

    that.drinkPotion = function () {
        if (haveAP) {
            hp += 1;
            spec.ap -= 2;
            console.log("Player " + spec.name + " drinks a potion and recover 1 hp");
        } else {
            console.log("Player " + spec.name + " doesn't have enough ap");
        }
    };

    return that;
}; 
