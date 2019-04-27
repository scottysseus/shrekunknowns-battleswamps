export default function playState(game) {
    
    let cursors;
    let platforms;
    let shrek;

    let isShrekFacingLeft = true;
    let bouncing = false;

    function preload() {
        game.load.image('ground', 'src/assets/ground.png');
        game.load.image('groundTop', 'src/assets/groundTop.png');
        game.load.spritesheet('shrek', 'src/assets/shrek.png', 144/3, 72);
        game.load.image('tree1', 'src/assets/tree1.png');
        game.load.image('tree2', 'src/assets/tree2.png');
        game.load.image("berryBush", "src/assets/berryBush.png");
    }
    
    function create() {
        addBackgroundScenery();
        
        game.world.setBounds(0, 0, 6400, 512);
        game.stage.disableVisibilityChange = true;
        cursors = game.input.keyboard.createCursorKeys();
        shrek = game.add.sprite(0,0,'shrek');
        shrek.anchor.setTo(0.5, 0.5);
        shrek.x = 150;
        shrek.y = 45;
        game.physics.arcade.enable(shrek);
        shrek.body.bounce.y = 0.2;
        shrek.body.gravity.y = 600*2;
        shrek.body.collideWorldBounds = true;
        shrek.animations.add('left', [0, 1, 2], 10, false);
        shrek.animations.add('right', [0,1,2], 10, false);

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.camera.follow(shrek, Phaser.Camera.FOLLOW_LOCKON);
    }
    
    
    function update() {
        var hitPlatform = game.physics.arcade.collide(shrek, platforms);
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
            shrek.body.velocity.x = -150;
            shrek.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            if(isShrekFacingLeft) {
                shrek.scale.x *= -1;
                isShrekFacingLeft = false;
            }
            //  Move to the right
            shrek.body.velocity.x = 150;
            shrek.animations.play('right');
        } else {
            shrek.frame = 0;
        }

        //  Allow the shrek to jump if they are touching the ground.
        if (cursors.up.isDown && shrek.body.touching.down && hitPlatform)
        {
            shrek.body.velocity.y = -350*1.5;
        }

        // bounce logic
        if (hitPlatform) {
            bouncing = false;
        }
        if (cursors.down.isDown && !hitPlatform && bouncing === false) {
            shrek.body.velocity.y = 900*1.25;
            bouncing = true;
        }
    }

    function render() {

    }

    function addBackgroundScenery() {
        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = game.add.group();
            
        //  We will enable physics for any object that is created in this group
        if (platforms) {
            platforms.enableBody = true;
        }

        // Here we create the ground.

        for(var i = 0; i < 65; ++i) {
            var x = i * 256;
            var y = game.world.height - 64;
            var ground = platforms.create(x, y, 'ground');
            game.add.sprite(x, y - 32, 'groundTop');
            ground.body.immovable = true;
        }

        game.add.sprite(150, game.world.height - 265, 'tree1');
        game.add.sprite(300, game.world.height - 330, 'tree2');
        game.add.sprite(100, game.world.height - 175, "berryBush");
    }

    function addForegroundScenery() {

    }

    return {preload, create, update, render};
}