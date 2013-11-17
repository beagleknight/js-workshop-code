$(function () {
    // Use these arrays for adding players and enemies
    var players = [],
        enemies = [];

    /*
     * pickRandomEnemy
     *
     * Description
     *
     * Pick a random enemy from enemies Array
     */
    var pickRandomEnemy = function () {
        return enemies[~~(Math.random() * enemies.length)];
    };

    /*
     * fillCharacterElement
     *
     * Arguments
     *
     * character: Character object
     *
     * Description
     *
     * Fill an ul with character attributes
     */
    function fillCharacterElement(character) {
        var el = $("#" + character.id);
        el.find('.name span').html(character.name);
        el.find('.strength span').html(character.strength);
        el.find('.defense span').html(character.defense);
        el.find('.hp span').html(character.hp);
        el.find('.ap span').html(character.ap);
    }

    /*
     * bindActions
     *
     * Arguments
     *
     * character: Character object
     *
     * Description
     *
     * Bind functions character.attack and character.drinkPotion
     * to click events.
     */
    function bindActions(character) {
        var el = $("#" + character.id);

        el.on("click", ".attack", function () {
            var enemy = pickRandomEnemy();
            character.attack(enemy);
            fillCharacterElement(character);
            fillCharacterElement(enemy);
        });

        el.on("click", ".drinkPotion", function () {
            character.drinkPotion();
            fillCharacterElement(character);
        });
    }

    // 1. Create a function for creating character objects. They must have
    // id, name, strength, defense, hp and ap public attributes.
    var character = function (spec) {
        var that = spec;

        return that;
    };
    
    // 2. Create a function for creating player objects. They must inherit
    // from characters and have attack and drinkPotion public methods
    //
    // attack method:
    // receive an enemy parameter and substract from his hp the
    // difference between player's strength and enemy defense. Also, ap is
    // reduced by 1. 
    // If ap is 0 it doesn't have any effect
    // If all enemies are dead (hp <= 0) it doesn't have any effect
    //
    // drinkPotion method:
    // reduce ap by 2 and increment hp by 1
    // If ap is 0 it doesn't have any effect
    // hp cannot be greater than initial hp
    var player = function (spec) {
        var that = character(spec);

        var haveAP = function () {
            return spec.ap > 0;
        };

        that.attack = function (enemy) {
            if (haveAP) {
                if(!enemy.isDead()) {
                    var damage = spec.strength - enemy.defense;
                    if (damage > 0) {
                        enemy.hp -= damage;
                        console.log("Player " + spec.name + " inflicts " + damage + " damage to enemy " + enemy.name);
                    } else {
                        console.log("Player " + spec.name + " cannot damage enemy " + enemy.name);
                    }
                    spec.ap -= 1;
                } else {
                    console.log("Player " + spec.name + " try to damage enemy " + enemy.name + " but it's already dead!");
                }
            } else {
                console.log("Player " + spec.name + " doesn't have enough ap");
            }
        };

        that.drinkPotion = function () {
            if (haveAP) {
                spec.hp += 1;
                spec.ap -= 2;
                console.log("Player " + spec.name + " drinks a potion and recover 1 hp");
            } else{
                console.log("Player " + spec.name + " doesn't have enough ap");
            }
        };

        return that;
    }; 

    // 3. Create a function for creating enemy objects. They must inherit
    // from characters and have isDead public method
    //
    // isDead method:
    // returns true if hp <= 0
    var enemy = function (spec) {
        var that = character(spec);

        that.isDead = function () {
            return spec.hp <= 0;
        };

        return that;
    };
    
    // 4. Create 2 players and 3 enemies and add them to players and enemies
    // arrays. Use the two helpers above for DOM interaction using jquery.
    // WARNING: character.id must be equal to the id of a DOM element
    players.push(player({ id: "player1", name: "David", strength: 10, defense: 10, hp: 100, ap: 50 }));
    players.push(player({ id: "player2", name: "Manfred", strength: 20, defense: 5, hp: 200, ap: 20 }));
    enemies.push(enemy({ id: "enemy1", name: "Bat", defense: 5, hp: 20 }));
    enemies.push(enemy({ id: "enemy2", name: "Bat", defense: 5, hp: 20 }));
    enemies.push(enemy({ id: "enemy3", name: "Big Bat", defense: 15, hp: 50 }));

    var i, l;

    for (i = 0, l = players.length; i < l; i += 1) {
        fillCharacterElement(players[i]);
        bindActions(players[i]);
    }

    for (i = 0, l = enemies.length; i < l; i += 1) {
        fillCharacterElement(enemies[i]);
        bindActions(enemies[i]);
    }
});
