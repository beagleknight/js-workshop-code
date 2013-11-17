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
    
    // 3. Create a function for creating enemy objects. They must inherit
    // from characters and have isDead public method
    //
    // isDead method:
    // returns true if hp <= 0
    
    // 4. Create 2 players and 3 enemies and add them to players and enemies
    // arrays. Use the two helpers above for DOM interaction using jquery.
    // WARNING: character.id must be equal to the id of a DOM element
