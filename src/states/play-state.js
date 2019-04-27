import {FONT_COLOR} from "../common/constants";

export default function playState(game) {
    
    const GRAVITY = 600*2;
    const BOUNCE = 0.2;
    const GAME_HEIGHT = 512;
    const STORE_X = 650;
    const STORE_Y = GAME_HEIGHT - 310;
    const w = 640;
    const h = 512;

    // locations
    let GROUND_LEVEL;

    // game stats
    let level = 1;

    // groups
    let cursors;
    let groundPlatform;

    // characters
    let shrek;
    const SHREK_BASE_SPEED = 150;
    const SHREK_BASE_JUMP_SPEED = 525;
    let isShrekHit = false;
    const SHREK_KNOCKBACK_DISTANCE = 64;
    const SHREK_KNOCKBACK_SPEED = 2000;
    let shrekHitLocationX;

    let storeUI;
    let choiceLabel;
    let donkey;
    const DONKEY_BASE_SPEED = 150;
    let donkeyDirection = -1;

    // flags
    let isShrekFacingLeft = true;
    let bouncing = false;

    // player stats
    let gold;
    let inventory;

    // keys
    let SPACE_BAR;
    let ACTION_KEY;
    let NET_KEY;

    function preload() {
        game.load.image('ground', 'src/assets/ground.png');
        game.load.image('groundTop', 'src/assets/groundTop.png');
        game.load.spritesheet('shrek', 'src/assets/shrek.png', 126/3, 72);
        game.load.spritesheet('donkey', 'src/assets/donkey.png', 192/4, 48);
        game.load.image('tree1', 'src/assets/tree1.png');
        game.load.image('tree2', 'src/assets/tree2.png');
        game.load.image('tree3', 'src/assets/tree3.png');
        game.load.image("berryBush", "src/assets/berryBush.png");
        game.load.image("store", "src/assets/store.png");
        game.load.image("forestBackground", "src/assets/forestBackground.png");
        game.load.image("storeMenu", "src/assets/menu.png");
        game.load.image("chop", "src/assets/chop.png");
        game.load.image("sky", "src/assets/sky.png");
    }
    
    function create() {
        GROUND_LEVEL = game.world.height - 64;

        game.world.setBounds(0, 0, 6400, 512);
        game.stage.disableVisibilityChange = true;
        cursors = game.input.keyboard.createCursorKeys();
        addBackgroundScenery();
        addEnemies();
        addShrek();

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.camera.follow(shrek, Phaser.Camera.FOLLOW_LOCKON);

        addForegroundScenery();

        // Add a input listener that can help us return from being paused
        game.input.onDown.add(unpause, self);

        SPACE_BAR = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        SPACE_BAR.onUp.add(toggleStore, this);

        ATTACK_KEY = game.input.keyboard.addKey(Phaser.Keyboard.A);
        ATTACK_KEY.onUp.add(toggleStore, this);
    }
    
    
    function update() {
        updateShrek();
        moveDonkey();
    }

    function addBackgroundScenery() {

        //  The groundPlatform group contains the ground and the 2 ledges we can jump on
        groundPlatform = game.add.group();
            
        //  We will enable physics for any object that is created in this group
        if (groundPlatform) {
            groundPlatform.enableBody = true;
        }


        // Here we create the ground.
        for(var i = 0; i < 65; ++i) {
            var x = i * 256;
            var y = GROUND_LEVEL;
            var ground = groundPlatform.create(x, y, 'ground');
            game.add.sprite(x, y - 32, 'groundTop');
            ground.body.immovable = true;
        }

        // add the forest background
        for(var i = 0; i < 10; ++i) {
            var x = i * 640;
            var y = game.world.height - 64 - 12- 320;
            game.add.sprite(x, 0, 'sky');
            game.add.sprite(x, y, 'forestBackground');
        }
        game.add.sprite(STORE_X, STORE_Y, "store");
    }

    function addShrek() {
        shrek = game.add.sprite(0,0,'shrek');
        shrek.anchor.setTo(0.5, 1);
        shrek.x = 150;
        shrek.y = GROUND_LEVEL;
        game.physics.arcade.enable(shrek);
        shrek.body.bounce.y = BOUNCE;
        shrek.body.gravity.y = GRAVITY;
        shrek.body.collideWorldBounds = true;
        shrek.animations.add('shrekWalk', [0, 1, 2], 10, false);
    }

    function addEnemies() {
        donkey = game.add.sprite(0,0, 'donkey');
        donkey.anchor.setTo(0.5, 1);

        donkey.x = 150;
        donkey.y = GROUND_LEVEL;
        game.physics.arcade.enable(donkey);
        donkey.body.bounce.y = BOUNCE;
        donkey.body.gravity.y = GRAVITY;
        donkey.body.collideWorldBounds = true;
        donkey.animations.add('donkeyWalk', [0, 1, 2, 0], 12, false);
    }

    function addForegroundScenery() {
        game.add.sprite(150, game.world.height - 215, 'tree1');
        game.add.sprite(400, game.world.height - 115, "berryBush");
        game.add.sprite(500, game.world.height - 270, 'tree2');
        game.add.sprite(800, game.world.height - 284, 'tree3');
        game.add.sprite(100, game.world.height - 125, "berryBush");
    }

    function createPause() {
        let pauseLabel = game.add.text(0, 20, 'Pause', { font: '24px Comic Sans MS', fill: FONT_COLOR });
        pauseLabel.inputEnabled = true;
        pauseLabel.events.onInputUp.add(function () {
            // When the paus button is pressed, we pause the game
            game.paused = true;

            // Then add the menu
            storeUI = game.add.sprite(640/2, 512/2, 'storeMenu');
            storeUI.anchor.setTo(0.5, 0.5);
        });
    }

    // And finally the method that handles the pause menu
    function unpause(event) {
        // Only act if paused
        if(game.paused){
            // Calculate the corners of the menu
            var x1 = w/2 - 270/2, x2 = w/2 + 270/2,
                y1 = h/2 - 180/2, y2 = h/2 + 180/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
                var choicemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice 
                var choice = Math.floor(x / 90) + 3*Math.floor(y / 90);

                // Display the choice
                console.log('You chose menu item: ' + choicemap[choice]);
            }
            else {
                // Remove the menu and the label
                storeUI.destroy();

                // Unpause the game
                game.paused = false;
            }
        }
    }

    function toggleStore() {
        if (shrek.x <= 750 && shrek.x >= 630 && !game.paused) {
            // When the paus button is pressed, we pause the game
            game.paused = true;

            // Then add the menu
            storeUI = game.add.sprite(740, 256, 'storeMenu');
            storeUI.anchor.setTo(.5, .5);
        }
        /*
        if (storeUI.visible) {
            pause donkey
        }
        */
    }

    function updateShrek() {
        var isOnGround = game.physics.arcade.collide(shrek, groundPlatform);
        
        // shrek can't be controlled if he is being knocked back by an enemy
        if(isShrekHit) {
            if(Math.abs(shrek.x - shrekHitLocationX) > SHREK_KNOCKBACK_DISTANCE || !shrek.body.velocity.x) {
                isShrekHit = false;
            }
            return;
        }

        //  Reset the players velocity (movement)
        shrek.body.velocity.x = 0;
        shrek.body.bounce.y = bouncing ? 0.7 : 0.2;
        game.physics.arcade.overlap(shrek, donkey, onShrekHit, null, this);

        if (cursors.left.isDown)
        {
            if(!isShrekFacingLeft) {
                flipSpriteDirection(shrek); // flips shrek about the y axis
                isShrekFacingLeft = true;
            }
            //  Move to the left
            shrek.body.velocity.x = -SHREK_BASE_SPEED;
            shrek.animations.play('shrekWalk');
        }
        else if (cursors.right.isDown)
        {
            if(isShrekFacingLeft) {
                flipSpriteDirection(shrek); // flips shrek about the y axis
                isShrekFacingLeft = false;
            }
            //  Move to the right
            shrek.body.velocity.x = SHREK_BASE_SPEED;
            shrek.animations.play('shrekWalk');
        } else {
            shrek.frame = 0;
        }

        //  Allow the shrek to jump if they are touching the ground.
        if (cursors.up.isDown && shrek.body.touching.down && isOnGround)
        {
            shrek.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
        }

        // bounce logic
        if (isOnGround) {
            bouncing = false;
        }
        if (cursors.down.isDown && !isOnGround && bouncing === false) {
            shrek.body.velocity.y = 900*1.25;
            bouncing = true;
        }

    }

    function moveDonkey() {
        var isOnGround = game.physics.arcade.collide(donkey, groundPlatform);

        donkey.body.velocity.x = DONKEY_BASE_SPEED * donkeyDirection;
        donkey.animations.play('donkeyWalk');
        if(Math.random() > 0.98) {
            donkeyDirection *= -1;
            flipSpriteDirection(donkey);
        }
    }

    function onShrekHit(shrek, enemy) {
        isShrekHit = true;
        let enemysVelocity = enemy.body.velocity.x;
        let shreksVelocity = shrek.body.velocity.x;
        if(!shreksVelocity) {
            shrek.body.velocity.x = getDirectionFromVelocity(enemysVelocity) * SHREK_KNOCKBACK_SPEED; 
        } else {
            shrek.body.velocity.x = getDirectionFromVelocity(shreksVelocity) * -1 * SHREK_KNOCKBACK_SPEED;
        }
        shrekHitLocationX = enemy.x;
    }

    function animateAction(actionSpriteName) {
        let actionSprite = game.add.sprite();
    }

    function getDirectionFromVelocity(velocity) {
        return velocity / Math.abs(velocity);
    }

    // flips sprite about the y-axis
    function flipSpriteDirection(sprite) {
        sprite.scale.x *= -1
    }
    
    function getShrekActionAnchor() {
        let anchorX = shrek.x - 17;
        let anchorY = shrek.x - 52;
    }

    return {preload, create, update};
}