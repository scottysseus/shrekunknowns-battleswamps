import {ITEM_MAP, FONT_COLOR, MARGIN, DescriptionStyle} from "../common/constants";
import GenericButton from "../common/GenericButton";
import ItemButton from "../common/ItemButton";
import StoreMenu from "./storeMenu";
import CreatureConstants from "./creatureConstants";

export default function playState(game) {

    const GRAVITY = 600*2;
    const BOUNCE = 0;



    // locations
    let GROUND_LEVEL;
    let HEALTH_BAR_X = 10;
    let HEALTH_BAR_Y = 10;
    let COIN_STAT_X = 224;
    let COIN_STAT_Y = 10;
    let STORE_X;
    let STORE_Y;
    let STORE_RADIUS = 180;

    let BAG_X = game.width - 82;
    let BAG_Y = 10;

    let ITEM_X = 324;
    let ITEM_Y = 10;

    // game stats
    let level = 1;

    // groups
    let cursors;
    let groundPlatform;

    // characters
    let shrek, swampBubble;
    const SHREK_BASE_SPEED = 150;
    const SHREK_BASE_JUMP_SPEED = 525;
    const SHREK_KNOCKBACK_TIME = 45;
    const SHREK_KNOCKBACK_SPEED = 200;
    let actionSprites = {};
    let actionSpriteProps = {'chop': {
            speed: 36,
            collisionCheckFunction: () => { checkChopCollision(false); }
        }, 
        'net': {
            speed: 12,
            collisionCheckFunction: checkNetCollision
        }, 
        'bigfist': {
            speed: 18,
            collisionCheckFunction: () => { checkChopCollision(true); }
        }
    };
    let coinIcon, coinText, heartGroup, iconBag;
    let creatureCountText = {};
    let isShrekActing = false;
    let doubleJumped = false;
    let jumpKeyWasPressed = false;

    let storeUI;
    let choiceLabel;
    let enemies = [];
    let enemiesSold = 0;
    let timeSinceEnemySpawn = {};
    const CAPTURABLE_DURATION = 360;

    let storePurchaseSound;
    let storePurchaseDenied;
    let netCaptureSound;
    let bubbleGetSound;
    let bubbleBounceSound;
    let bubblePopSound;
    let fartSound;
    let hitSound;
    let hitBigSound;
    let loserFartSound;

    // flags
    let isShrekFacingLeft = true;
    let bouncing = false;
    let isStoreOpen = false;

    // player stats
    let gold = 0;
    let inventory = {};
    let inventoryDisplay = {};
    let capturedCreatures = [];
    let creatureCounts = {};
    let health = 10;

    // keys
    let SPACE_BAR;
    let ACTION_KEY;
    let NET_KEY;

    let emitterManager;
    let fairieDustEmitter;

    function preload() {
        
    }
    
    function create() {
        GROUND_LEVEL = game.world.height - 64;
        STORE_X = 640 * 5 + 450;
        STORE_Y = GROUND_LEVEL - 64;

        game.world.setBounds(0, 0, 6400, 512);
        game.stage.disableVisibilityChange = true;
        cursors = game.input.keyboard.createCursorKeys();
        addBackgroundScenery();
        addEnemies();
        addShrek();
        addActionSprites();

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.camera.follow(shrek, Phaser.Camera.FOLLOW_LOCKON);

        CreatureConstants.CREATURE_LIST.forEach((creatureProps) => {
            creatureCounts[creatureProps.name] = 0;
        });
        addForegroundScenery();
        addStatOverlay();

        SPACE_BAR = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        SPACE_BAR.onUp.add(toggleStore, this);

        ACTION_KEY = game.input.keyboard.addKey(Phaser.Keyboard.A);
        ACTION_KEY.onUp.add(() => {
            if (inventory["Big Fist"] === 1)
                animateAction('bigfist');
            else
                animateAction('chop');
        }, this);
        NET_KEY = game.input.keyboard.addKey(Phaser.Keyboard.S);
        NET_KEY.onUp.add(() => {animateAction('net')}, this);
        createInventory();
        storePurchaseSound = game.add.audio("purchase");
        storePurchaseDenied = game.add.audio("denied");
        netCaptureSound = game.add.audio("net");
        bubbleGetSound = game.add.audio("bubbleGet");
        bubbleBounceSound = game.add.audio("bubbleBounce");
        bubblePopSound = game.add.audio("bubblePop");
        fartSound = game.add.audio("fart");
        hitSound = game.add.audio("hit");
        hitBigSound = game.add.audio("hitBig");
        loserFartSound = game.add.audio("loserFart");

        initSpawnTimeMap();
    }
    
    
    function update() {
        level = getLevelFromEnemiesSold();
        updateShrek();
        updateEnemies();
        updateShrekAction();
        updateStatOverlay();
    }

    function updateShrekAction() {
        Object.keys(actionSpriteProps).forEach((actionName) => {
            const sprite = actionSprites[actionName].sprite;
            if (sprite.alpha > 0.5) {
                actionSpriteProps[actionName].collisionCheckFunction();
            }    
        });

    }

    function createInventory() {
        const items = Object.keys(ITEM_MAP);
        for (let i = 0; i < items.length; i++){ 
            inventory[items[i]] = 0;
        }
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
            if(i == 5) {
                game.add.sprite(x, y, 'storeBackground');
            } else {
                game.add.sprite(x, y, 'forestBackground');
            }
        }
        
        let store = game.add.sprite(STORE_X, STORE_Y, "store");
        store.scale.setTo(2);
        store.anchor.setTo(0.5, 0.5);
    }

    function addShrek() {
        shrek = game.add.sprite(0,0,'shrek');
        shrek.anchor.setTo(0.5, 1);
        shrek.x = STORE_X;
        shrek.y = GROUND_LEVEL;
        game.physics.arcade.enable(shrek);
        shrek.body.bounce.y = BOUNCE;
        shrek.body.gravity.y = GRAVITY;
        shrek.body.collideWorldBounds = true;
        shrek.animations.add('shrekWalk', [0, 1, 2], 10, false);
        shrek.hitTimer = 0;

        addSwampBubble();
    }

    function addSwampBubble() {
        swampBubble = game.add.image(shrek.x, shrek.y, "swampBubble");
        swampBubble.alpha = 0;
        swampBubble.anchor.setTo(0.5, 1);
    }

    function addActionSprites() {

        Object.keys(actionSpriteProps).forEach((spriteName) => {
            let spriteProps = actionSpriteProps[spriteName];
            let actionSprite = game.add.sprite(0, 0, spriteName);
            actionSprite.alpha = 0;
            let animationName = spriteName + 'Anim';
            let actionAnim = actionSprite.animations.add(animationName, [0, 1, 2, 2, 2], spriteProps.speed, false);
            actionAnim.onComplete.add(() => {
                actionSprite.alpha = 0; 
                actionSprites[spriteName].collidedEnemies = []
            }, this);
            actionSprites[spriteName] = {
                sprite: actionSprite,
                animationName: animationName,
                name: spriteName,
                collidedEnemies: []
            };
        });
    }

    function addEnemies() {
        for (let i = 0; i < 10; i++) {
            spawnEnemy(CreatureConstants.FAIRY);
            spawnEnemy(CreatureConstants.IMP);
        }
    }

    function initSpawnTimeMap() {
        CreatureConstants.CREATURE_LIST.forEach((creatureProps) => {
            timeSinceEnemySpawn[creatureProps.name] = 0;
        });
    }

    function spawnEnemy(enemyTemplate) {
        let enemy = game.add.sprite(0, 0, enemyTemplate.name);

        enemy.anchor.setTo(0.5, 1);

        enemy.x = randomSpawnX(enemyTemplate);
        enemy.y = GROUND_LEVEL - enemyTemplate.altitude;
        game.physics.arcade.enable(enemy);
        enemy.body.bounce.y = BOUNCE;
        enemy.body.gravity.y = enemyTemplate.flier ? 0 : GRAVITY;
        enemy.body.collideWorldBounds = true;
        enemy.animations.add(enemyTemplate.name + 'Walk', [0, 1, 2, 0], 12, false);
        enemy.direction = -1; // custom state
        enemy.health = enemyTemplate.baseHealth + level;
        enemy.name = enemyTemplate.name
        enemy.template = enemyTemplate;
        enemy.pauseTimer = 0;
        enemy.capturableTimer = 0;
        enemies.push(enemy);
    }

    function randomSpawnX(enemyTemplate) {
        let rand = Math.random();
        let denormalized = rand * ((game.world.width /2) - STORE_RADIUS - enemyTemplate.minDistance - 250);
        let spawnX = rand > 0.5 ? denormalized : game.world.width - denormalized;
        return spawnX
    }

    function addForegroundScenery() {
        game.add.sprite(150, game.world.height - 215, 'tree1');
        game.add.sprite(400, game.world.height - 115, "berryBush");
        game.add.sprite(500, game.world.height - 270, 'tree2');
        game.add.sprite(800, game.world.height - 284, 'tree3');
        game.add.sprite(100, game.world.height - 125, "berryBush");
    }

    function toggleStore() {
        if(isStoreOpen) {
            storeUI.destroy();
            isStoreOpen = false;
            return;
        }
        if (shrek.x <= STORE_X + STORE_RADIUS && shrek.x >= STORE_X - STORE_RADIUS && !isStoreOpen) {
            createStore();
            isStoreOpen = true;
        }
    
    }

    function createStore() {
        storeUI = game.add.group();

        // Then add the menu
        let menuContainer = StoreMenu(game);
        storeUI.add(menuContainer);

        let sellButtonCoords = camera_izeCoordinates(game.width - (MARGIN * 2),
            game.height - (MARGIN * 2));
        let sellButton = GenericButton(game, sellButtonCoords.x, 
            sellButtonCoords.y, 'SELL CREATURES', () => {
                capturedCreatures.forEach((creature, i) => {
                    let creatureName = creature.name;
                    gold += creature.price;
                    enemiesSold++;
                    delete capturedCreatures[i];
                    storePurchaseSound.play();
                    creatureCounts[creatureName] = 0;
                    
                });
                capturedCreatures = [];
            });
        sellButton.anchor.setTo(1, 0.5);
        storeUI.add(sellButton);

        let closeButtonCoords = camera_izeCoordinates(game.width - (MARGIN * 2), MARGIN * 2);
        let closeButton = GenericButton(game, closeButtonCoords.x, 
            closeButtonCoords.y-32, 'X', () => {storeUI.destroy(); isStoreOpen = false;});
        closeButton.anchor.setTo(0, 0);
        storeUI.add(closeButton);
        let y = MARGIN;
        const items = Object.keys(ITEM_MAP);
        let coords = camera_izeCoordinates(MARGIN * 2, y);
        for(var i = 0; i < items.length; ++i) {
            let itemName = items[i];
            const itemDesc = ITEM_MAP[items[i]].descr;
            let itemCost = ITEM_MAP[items[i]].cost;
            let itemButton = ItemButton(game, coords.x, coords.y, itemName, () => {
                // ensure player has enough currency to buy this item
                if (validatePurchase(ITEM_MAP[itemName], itemName)) {
                    inventory[itemName]+= 1;
                    gold-= ITEM_MAP[itemName].cost;
                    if (itemName === "Swamp Bubble") {
                        bubbleGetSound.play();
                    } else {
                        storePurchaseSound.play();
                    }
                } else {
                    storePurchaseDenied.play();
                }
            });
            storeUI.add(itemButton);

            let itemDescr = game.add.text(coords.x+25, coords.y+45, itemDesc + " ($" + itemCost  + ")", DescriptionStyle);
            storeUI.add(itemDescr);
            coords.y += (MARGIN*3);
        }
    }

    function validatePurchase(item, itemName) {
        return item && item.cost <= gold && inventory[itemName] === 0;
    }

    function addStatOverlay() {
        heartGroup = game.add.group();

        // add coins
        let coinCoords = camera_izeCoordinates(COIN_STAT_X, COIN_STAT_Y);
        coinIcon = game.add.sprite(coinCoords.x, coinCoords.y,'coin');
        coinIcon.animations.add('rotate', [0,1,2,3,4,5,6,7], 14, true);
        coinIcon.animations.play('rotate');
        coinIcon.anchor.setTo(0,0);
        coinIcon.fixedToCamera = true;
        
        coinText = game.add.text(coinCoords.x + 20, coinCoords.y, ' x ' + gold, {font: 'Comic Sans MS', fill: FONT_COLOR, align: 'left', fontSize: '12px'});
        coinText.fixedToCamera = true;

        // add hearts
        for(let i = 0; i < health; ++i) {
            let coords = camera_izeCoordinates(HEALTH_BAR_X + 18 * i, HEALTH_BAR_Y);
            let heart = game.add.sprite(coords.x, coords.y, 'heart');
            heart.fixedToCamera = true;
            heart.anchor.set(0,0);
            heartGroup.add(heart);
        }

        // add captured creatures
        let bagCoords = camera_izeCoordinates(BAG_X, BAG_Y)
        iconBag = game.add.image(bagCoords.x, bagCoords.y, "iconBag");
        iconBag.anchor.setTo(0,0);
        iconBag.fixedToCamera = true;
        iconBag.alpha = 0.7
        let iconBagOverlay = game.add.image(bagCoords.x, bagCoords.y, "iconBagOverlay");
        iconBagOverlay.anchor.setTo(0,0);
        iconBagOverlay.fixedToCamera = true;
        
        let row = 0;
        CreatureConstants.CREATURE_LIST.forEach((creatureProps) => {
            let creatureName = creatureProps.name;
            let y = BAG_Y + iconBag.height - 16 - (row * 23);
            let x = BAG_X + 6;
            let icon = game.add.image(x,y, creatureName + 'Icon');
            let text = game.add.text(x + 16, y, ' x ' + creatureCounts[creatureName], {font: 'Comic Sans MS', fill: FONT_COLOR, align: 'left', fontSize: '12px'});
            text.anchor.setTo(0, 0.5);
            text.fixedToCamera = true;
            creatureCountText[creatureName] = text;
            icon.fixedToCamera = true;
            icon.anchor.setTo(0, 0.5);
            ++row;
        });
        
    }

    function updateStatOverlay() {
        coinText.x = COIN_STAT_X + 20;
        coinText.y = COIN_STAT_Y.y; 
        coinText.text = ' x ' + gold;

        for(let i = 0; i < heartGroup.children.length; ++i) {
            let heart = heartGroup.getChildAt(i);
            if(i < health) {
                heart.visible = true
            } else {
                heart.visible = false;
            }
        }

        // creature count text
        Object.keys(creatureCountText).forEach((creatureName) => {
            creatureCountText[creatureName].text = ' x ' + creatureCounts[creatureName];
        }); 

        // items
        Object.keys(inventory).forEach((itemName) => {
            if(inventory[itemName] < 1 || inventoryDisplay[itemName] || itemName === "Swamp Bubble") {
                return;
            }
            let col = Object.keys(inventoryDisplay).length;
            let itemIcon = game.add.image(ITEM_X + 18*col,ITEM_Y,ITEM_MAP[itemName].icon);
            itemIcon.fixedToCamera = true;
            itemIcon.anchor.setTo(0,0);
            inventoryDisplay[itemName] = itemIcon;
        });
    }
    
    function updateShrek() {
        if(inventory["Swamp Bubble"] > 0) {
            swampBubble.alpha = 0.6;
        } else {
            swampBubble.alpha = 0;
        }

        if(inventory["Fairie Dust"] && !fairieDustEmitter) {
            fairieDustEmitter = game.add.emitter(shrek.x, shrek.y-50, 200, 200);
            fairieDustEmitter.makeParticles("fairieDust");
            fairieDustEmitter.flow(1000, 300, 1, -1);
            fairieDustEmitter.alpha = .35;
        }

        if(isStoreOpen) {
            game.physics.arcade.collide(shrek, groundPlatform);
            shrek.body.velocity.x = 0;
            return;
        }
        reanchorActionSprites();
        if (shrek.hitTimer > 0) {
            game.physics.arcade.collide(shrek, groundPlatform);
            updateKnockedBackSprite(shrek);
        } else {
            updateShrekNormal();
        }
        swampBubble.x = shrek.x;
        swampBubble.y = shrek.y;

        if (fairieDustEmitter) {
            fairieDustEmitter.x = shrek.x;
            fairieDustEmitter.y = shrek.y-75;
        }
    }

    function getShrekRunSpeed() {
        return inventory["Speed"] ? SHREK_BASE_SPEED * 2 : SHREK_BASE_SPEED;
    }
    


    function updateShrekNormal() {

        var isOnGround = game.physics.arcade.collide(shrek, groundPlatform);
        //  Reset the players velocity (movement)
        shrek.body.velocity.x = 0;
        shrek.body.bounce.y = bouncing ? 0.7 : BOUNCE;

        if (cursors.left.isDown)
        {
            if(!isShrekFacingLeft) {
                flipShrek(); // flips shrek about the y axis
                isShrekFacingLeft = true;
            }
            //  Move to the left
            shrek.body.velocity.x = -getShrekRunSpeed();
            shrek.animations.play('shrekWalk');
        }
        else if (cursors.right.isDown)
        {
            if(isShrekFacingLeft) {
                flipShrek(); // flips shrek about the y axis
                isShrekFacingLeft = false;
            }
            //  Move to the right
            shrek.body.velocity.x = getShrekRunSpeed();
            shrek.animations.play('shrekWalk');
        } else {
            shrek.frame = 0;
        }

        //  Allow the shrek to jump if they are touching the ground.
        if (cursors.up.isDown) {
            if(shrek.body.touching.down && isOnGround) {
                shrek.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
            } else if(!doubleJumped && !jumpKeyWasPressed && inventory["Fart in a Jar"] > 0) {
                shrek.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
                doubleJumped = true;
                fartSound.play();
            }
            jumpKeyWasPressed = true;
        } else {
            jumpKeyWasPressed = false;
        }
        // bounce logic
        if (isOnGround) {
            if (bouncing) {
                bubbleBounceSound.play();
            }
            bouncing = false;
            doubleJumped = false;
        } else if(inventory["Fairie Dust"]) {
            shrek.body.gravity.y = GRAVITY / 2;
        }
        const currentDown = cursors.down.isDown;
        if (currentDown && !lastDown && !isOnGround && bouncing === false && inventory["Swamp Bubble"] === 1) {
            shrek.body.velocity.y = 900*1.25;
            bouncing = true;
        }

        enemies.forEach((enemy) => {
            game.physics.arcade.overlap(shrek, enemy, onShrekHit, null, this);
        });
        lastDown = currentDown;
    }

    let lastDown = false;

    function updateKnockedBackSprite(sprite) {
        sprite.hitTimer--;
        sprite.tint = sprite.hitTimer % 4 >= 2 ? '0xff6666' : '0xffffff';
    }
    
    function updateCapturableEnemy(enemy) {
        enemy.capturableTimer--;
        enemy.alpha = enemy.capturableTimer % 4 >= 2 ? 0.1 : 1;
    }

    function updateEnemies() {
        Object.keys(timeSinceEnemySpawn).forEach((enemyName) => {
            let timeSinceSpawn = timeSinceEnemySpawn[enemyName]++;
            let enemyProps = CreatureConstants.CREATURE_NAME_MAP[enemyName];
            if(timeSinceSpawn > enemyProps.baseSpawnRate - (360 * level)) {
                spawnEnemy(enemyProps);
                timeSinceEnemySpawn[enemyName] = 0;
            }
        });
        enemies.forEach((enemy) => {
            var isOnGround = game.physics.arcade.collide(enemy, groundPlatform);

            if(enemy.hitTimer > 0) {
                updateKnockedBackSprite(enemy);
                return;
            }

            if(enemy.health < 0 ) {
                destroyEnemy(enemy);
                return;
            }

            if(enemy.health === 0) {
                updateCapturableEnemy(enemy);
                // enemies are capturable only for a limited duration
                if(enemy.capturableTimer === 0) {
                    enemy.health = 1;
                    enemy.alpha = 1;
                }
            }

            if(enemy.pauseTimer > 0) {
                enemy.pauseTimer--;
                return;
            }
            let speed = getEnemySpeedFromLevel(enemy.template);
            if(enemy.health === 0) {
                speed /= 2;
            }

            if(enemy.x > STORE_X - STORE_RADIUS && enemy.x < STORE_X) {
                enemy.body.velocity.x = -speed;
                if(enemy.direction === 1) {
                    flipSpriteDirection(enemy);
                }
                enemy.direction = -1;
                return;
            } else if(enemy.x < STORE_X + STORE_RADIUS && enemy.x > STORE_X) {
                if(enemy.direction === -1) {
                    flipSpriteDirection(enemy);
                }
                enemy.body.velocity.x = speed;
                enemy.direction = 1;
                return;
            }

            enemy.body.velocity.x = speed * enemy.direction;
            enemy.animations.play(enemy.name + 'Walk');
            if(Math.random() < enemy.template.turnProb) {
                enemy.direction *= -1;
                flipSpriteDirection(enemy);
            }
                //  Allow the enemy to jump if they are touching the ground.
            if (enemy.body.touching.down && isOnGround) {
                if(Math.random() * 1000 > 992) {
                    enemy.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
                }
            }
        });
    }

    function reanchorActionSprites() {
        Object.keys(actionSprites).forEach(
            (actionSpriteName) => anchorActionSprite(actionSprites[actionSpriteName].sprite));
    }

    function onShrekHit(shrek, enemy) {
        enemy.body.velocity.x = 0;
        enemy.body.velocity.y = 0;
        enemy.pauseTimer = SHREK_KNOCKBACK_TIME / 2;
        knockbackSprite(shrek, enemy);
        if(inventory["Swamp Bubble"] > 0) {
            inventory["Swamp Bubble"] = inventory["Swamp Bubble"] - 1;
            bubblePopSound.play();
            return;
        }
        health--;
        if(health < 1) {
            loserFartSound.play();
            game.state.start("GameOver");
        }
    }

    function knockbackSprite(sprite, adversary) {
        sprite.hitTimer = SHREK_KNOCKBACK_TIME;
        const template = sprite.template || {};
        let kbX = template.knockbackVelocityX;
        let kbY = template.knockbackVelocityY;
        if (adversary === shrek && inventory["Big Fist"] === 1) {
            kbX *= 1;
            kbY *= 5;
        }
        let velocityX = kbX !== undefined ? kbX : SHREK_KNOCKBACK_SPEED;
        let velocityY = kbY !== undefined ? kbY : -SHREK_KNOCKBACK_SPEED;
        sprite.body.velocity.x = (adversary.body.x > sprite.body.x ? -velocityX : velocityX);
        sprite.body.velocity.y = velocityY;
    }

    function animateAction(actionSpriteName) {
        if(isShrekActing) {
            return;
        }
        isShrekActing = true;
        let actionSprite = actionSprites[actionSpriteName].sprite;
        let animationName = actionSprites[actionSpriteName].animationName;
        actionSprite.alpha = 1;
        actionSprite.anchor.setTo(1, 0.5);
        anchorActionSprite(actionSprite);
        let anim = actionSprite.animations.play(animationName);
        anim.onComplete.add(() => {isShrekActing = false;});
    }

    // flips sprite about the y-axis
    function flipSpriteDirection(sprite) {
        sprite.scale.x *= -1
    }
    
    function flipShrek() {
        flipSpriteDirection(shrek);
        Object.keys(actionSprites).forEach(
            (actionSpriteName) => flipSpriteDirection(actionSprites[actionSpriteName].sprite));
    }

    function anchorActionSprite(actionSprite) {
        let armAnchor = getShrekActionAnchor();
        actionSprite.x = armAnchor.anchorX;
        actionSprite.y = armAnchor.anchorY;
    }

    function getShrekActionAnchor() {
        let anchorX = isShrekFacingLeft? shrek.x - 17 : shrek.x + 17;
        let anchorY = shrek.y - 52;
        return {anchorX, anchorY};
    }

    function camera_izeCoordinates(x,y) {
        return {
            x: game.camera.x + x,
            y: game.camera.y +y
        };
    }

    function getEnemySpeedFromLevel(enemyTemplate) {
        return enemyTemplate.baseSpeed + 20 * level;
    }

    function checkNetCollision() {
        const net = actionSprites['net'];
        const netSprite = net.sprite;
        enemies.forEach((enemy) => {
            if (net.collidedEnemies.length >= 1 || Object.keys(capturedCreatures).includes(enemy.name) || enemy.health > 0) {
                return;
            }
            const foundCollision = Phaser.Rectangle.intersects(enemy.getBounds(), netSprite.getBounds());
            if (foundCollision) {
                net.collidedEnemies.push(enemy);
                creatureCounts[enemy.name] += 1;
                capturedCreatures.push(enemy.template);
                destroyEnemy(enemy)
                netCaptureSound.play();
            }
        });
        
    }

    const checkChopCollision = (isBigFist) => {
        const chop = isBigFist ? actionSprites['bigfist'] : actionSprites['chop'];
        const chopSprite = chop.sprite;

        enemies.forEach((enemy) => {
            if (chop.collidedEnemies.includes(enemy)) {
                return;
            }
            const foundCollision = Phaser.Rectangle.intersects(enemy.getBounds(), chopSprite.getBounds());
            if (foundCollision) {
                isBigFist ? hitBigSound.play() : hitSound.play();
                chop.collidedEnemies.push(enemy);
                const hadZeroHealth = enemy.health === 0;
                const damageDealt = isBigFist ? 4 : 1;
                enemy.health -= damageDealt;
                knockbackSprite(enemy, shrek);

                // at least one hit needs to make enemy capturable
                if (!hadZeroHealth && enemy.health < 0) { 
                    enemy.health = 0; 
                }
                if (enemy.health === 0) {
                    enemy.capturableTimer = CAPTURABLE_DURATION * (isBigFist ? 3 : 1);
                }
            }
        });
    }

    function destroyEnemy(enemy) {
        enemies.splice(enemies.indexOf(enemy), 1);
        enemy.destroy();
    }

    function getLevelFromEnemiesSold() {
        if(enemiesSold < 10) {
            return 0;
        } else if(enemiesSold < 20) {
            return 1;
        } else if(enemiesSold < 30) {
            return 2;
        } else if(enemiesSold < 50) {
            return 3;
        } else {
            return 4;
        }
    }

    return {preload, create, update};
}