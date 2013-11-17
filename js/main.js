$(function () {
    // Use these arrays for adding players and enemies
    var players = [];
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
    }

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
    };

    players.push(MYGAME.player({ id: "player1", name: "David", strength: 10, defense: 10, hp: 100, ap: 50 }));
    players.push(MYGAME.player({ id: "player2", name: "Manfred", strength: 20, defense: 5, hp: 200, ap: 20 }));
    enemies.push(MYGAME.enemy({ id: "enemy1", name: "Bat", defense: 5, hp: 20 }));
    enemies.push(MYGAME.enemy({ id: "enemy2", name: "Bat", defense: 5, hp: 20 }));
    enemies.push(MYGAME.enemy({ id: "enemy3", name: "Big Bat", defense: 15, hp: 50 }));

    var i, l;

    for (i = 0, l = players.length; i < l; i += 1) {
        fillCharacterElement(players[i]);
        bindActions(players[i]);
    }

    for (i = 0, l = enemis.length; i < l; i += 1) {
        fillCharacterElement(enemies[i]);
        bindActions(enemies[i]);
    }
});
