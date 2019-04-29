export default function assetLoadState(game) {

    function preload() {
        game.load.image('ground', 'src/assets/ground.png');
        game.load.image('groundTop', 'src/assets/groundTop.png');
        game.load.spritesheet('shrek', 'src/assets/shrek.png', 126/3, 72);
        game.load.spritesheet('donkey', 'src/assets/donkey.png', 192/4, 48);
        game.load.spritesheet('unicorn', 'src/assets/unicorn.png', 92, 82);
        game.load.spritesheet('gnome', 'src/assets/gnome.png', 30, 50);
        game.load.spritesheet('fairy', 'src/assets/fairy.png', 56/4, 17);
        game.load.spritesheet('phoenix', 'src/assets/phoenix.png', 56, 56);
        game.load.spritesheet('imp', 'src/assets/imp.png', 32, 48);
        game.load.spritesheet('goblinWarrior', 'src/assets/goblinWarrior.png', 52, 72);
        game.load.image('tree1', 'src/assets/tree1.png');
        game.load.image('tree2', 'src/assets/tree2.png');
        game.load.image('tree3', 'src/assets/tree3.png');
        game.load.image("berryBush", "src/assets/berryBush.png");
        game.load.image("store", "src/assets/store.png");
        game.load.image("forestBackground", "src/assets/forestBackground.png");
        game.load.image("storeBackground", "src/assets/storeBackground.png");
        game.load.spritesheet("chop", "src/assets/chop.png", 120/3, 64);
        game.load.spritesheet("bigfist", "src/assets/bigfist.png", 192/3, 64);
        game.load.spritesheet("net", "src/assets/net.png", 288/3, 108);
        game.load.image("sky", "src/assets/sky.png");
        game.load.image("heart", "src/assets/heart.png");
        game.load.spritesheet("coin", "src/assets/coin.png", 128/8, 16);
        game.load.image("swampBubble", "src/assets/swampBubble.png");
        game.load.image("fairieDust", "src/assets/fairieDust.png");
        

        // icons
        game.load.image("donkeyIcon", "src/assets/donkeyIcon.png");
        game.load.image("fairyIcon", "src/assets/fairyIcon.png");
        game.load.image("gnomeIcon", "src/assets/gnomeIcon.png");
        game.load.image("unicornIcon", "src/assets/unicornIcon.png");
        game.load.image("phoenixIcon", "src/assets/phoenixIcon.png");
        game.load.image("impIcon", "src/assets/impIcon.png");
        game.load.image("goblinWarriorIcon", "src/assets/goblinWarriorIcon.png");
        game.load.image("iconBag", "src/assets/iconBag.png");
        game.load.image("iconBagOverlay", "src/assets/iconBagOverlay.png");

        game.load.image("swampBubbleIcon", "src/assets/swampBubbleIcon.png");
        game.load.image("fairieDustIcon", "src/assets/fairieDustIcon.png");
        game.load.image("bigFistIcon", "src/assets/bigFistIcon.png");
        game.load.image("speedIcon", "src/assets/speedIcon.png");
        game.load.image("fartJarIcon", "src/assets/fartJarIcon.png");

        // sounds
        game.load.audio("net", "src/assets/sound/net.wav");
        game.load.audio("purchase", "src/assets/sound/cashreg.wav");
        game.load.audio("denied", "src/assets/sound/denied.wav");
        game.load.audio("bubbleGet", "src/assets/sound/bubbleget.wav");
        game.load.audio("bubbleBounce", "src/assets/sound/bubblebounce.wav");
        game.load.audio("bubblePop", "src/assets/sound/bubblePop.wav");
        game.load.audio("fart", "src/assets/sound/fart.wav");
        game.load.audio("hit", "src/assets/sound/hit.wav");
        game.load.audio("hitBig", "src/assets/sound/hit2.wav");
        game.load.audio("loserFart", "src/assets/sound/loserFart.wav"); 
    }

    function create() {
        game.state.start('Entry');
    }

    return {preload, create};

}