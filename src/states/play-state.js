import {FONT_COLOR} from "../common/constants";

export default function playState(game) {
    
    const GRAVITY = 600*2;
    const BOUNCE = 0.2;
    const GAME_HEIGHT = 512;
    const STORE_X = 650;
    const STORE_Y = GAME_HEIGHT - 310;
    // game stats
    let level = 1;

    // groups
    let cursors;
    let groundPlatform;

    // characters
    let shrek;
    const SHREK_BASE_SPEED = 150;
    const SHREK_BASE_JUMP_SPEED = 525;

    let storeUI;
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

    function preload() {
        game.load.image('ground', 'src/assets/ground.png');
        game.load.image('groundTop', 'src/assets/groundTop.png');
        game.load.spritesheet('shrek', 'src/assets/shrek.png', 144/3, 72);
        game.load.spritesheet('donkey', 'src/assets/donkey.png', 192/4, 48);
        game.load.image('tree1', 'src/assets/tree1.png');
        game.load.image('tree2', 'src/assets/tree2.png');
        game.load.image('tree3', 'src/assets/tree3.png');
        game.load.image("berryBush", "src/assets/berryBush.png");
        game.load.image("store", "src/assets/store.png");
        game.load.image("forestBackground", "src/assets/forestBackground.png");
    }
    
    function create() {
        game.world.setBounds(0, 0, 6400, 512);
        game.stage.disableVisibilityChange = true;
        cursors = game.input.keyboard.createCursorKeys();
        SPACE_BAR = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        addBackgroundScenery();
        addEnemies();
        addShrek();

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.camera.follow(shrek, Phaser.Camera.FOLLOW_LOCKON);

        addForegroundScenery();
        createStore();
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
            var y = game.world.height - 64;
            var ground = groundPlatform.create(x, y, 'ground');
            game.add.sprite(x, y - 32, 'groundTop');
            ground.body.immovable = true;
        }

        // add the forest background
        for(var i = 0; i < 10; ++i) {
            var x = i * 640;
            var y = game.world.height - 64 - 12- 320;
            game.add.sprite(x, y, 'forestBackground');
        }
        game.add.sprite(STORE_X, STORE_Y, "store");
    }

    function addShrek() {
        shrek = game.add.sprite(0,0,'shrek');
        shrek.anchor.setTo(0.5, 0.5);
        shrek.x = 150;
        shrek.y = 45;
        game.physics.arcade.enable(shrek);
        shrek.body.bounce.y = BOUNCE;
        shrek.body.gravity.y = GRAVITY;
        shrek.body.collideWorldBounds = true;
        shrek.animations.add('shrekWalk', [0, 1, 2], 10, false);
    }

    function addEnemies() {
        donkey = game.add.sprite(0,0, 'donkey');
        donkey.anchor.setTo(0.5, 0.5);

        donkey.x = 150;
        donkey.y = 45;
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

    function createStore() {
        storeUI = game.add.graphics(0, 0);

        storeUI.beginFill("#000000", 1);
        storeUI.drawCircle(300, 300, 100);
        storeUI.visible = false;
    }

    function interactWithStore() {
        storeUI.visible = !storeUI.visible;
    }

    function updateShrek() {
        var isOnGround = game.physics.arcade.collide(shrek, groundPlatform);
        //  Reset the players velocity (movement)
        shrek.body.velocity.x = 0;
        shrek.body.bounce.y = bouncing ? 0.7 : 0.2;

        if (cursors.left.isDown)
        {
            if(!isShrekFacingLeft) {
                shrek.scale.x *= -1;
                isShrekFacingLeft = true;
            }
            //  Move to the left
            shrek.body.velocity.x = -SHREK_BASE_SPEED;
            shrek.animations.play('shrekWalk');
        }
        else if (cursors.right.isDown)
        {
            if(isShrekFacingLeft) {
                shrek.scale.x *= -1;
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

        // check if he is interacting with the store
        if(SPACE_BAR.isDown && shrek.x <= 750 && shrek.x >= 630){ 
            interactWithStore();
        }
    }

    function moveDonkey() {
        var isOnGround = game.physics.arcade.collide(donkey, groundPlatform);

        donkey.body.velocity.x = DONKEY_BASE_SPEED * donkeyDirection;
        donkey.animations.play('donkeyWalk');
        if(Math.random() > 0.98) {
            donkeyDirection *= -1;
            donkey.scale.x *= -1;

        }


    }

    return {preload, create, update};
}