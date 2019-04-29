import entryState from "./states/entry-state";
import aboutState from "./states/about-state";
import instructionsState from "./states/instructions-state";
import instructionsState2 from "./states/instructions-state2";
import gameOverState from "./states/game-over-state";
import assetLoadState from "./states/asset-load-state";

var game = new Phaser.Game(640, 512, Phaser.AUTO, Phaser.AUTO, 'game', undefined, undefined, false);
game.state.add("Entry", entryState(game));
game.state.add("About", aboutState(game));
game.state.add("Instructions", instructionsState(game));
game.state.add("Instructions2", instructionsState2(game));
game.state.add("GameOver", gameOverState(game));
game.state.add("AssetLoad", assetLoadState(game));
game.state.start("AssetLoad");