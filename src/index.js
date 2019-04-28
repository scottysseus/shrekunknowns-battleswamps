import playState from "./states/play-state";
import entryState from "./states/entry-state";
import aboutState from "./states/about-state";
import storeState from "./states/store-state";
import instructionsState from "./states/instructions-state";
import {GAME_WIDTH, GAME_HEIGHT} from "./common/constants";

var game = new Phaser.Game(640, 512, Phaser.AUTO, Phaser.AUTO, 'game', undefined, undefined, false);
game.state.add("Play", playState(game));
game.state.add("Entry", entryState(game));
game.state.add("About", aboutState(game));
game.state.add("Store", storeState(game));
game.state.add("Instructions", instructionsState(game));
game.state.start("Entry");