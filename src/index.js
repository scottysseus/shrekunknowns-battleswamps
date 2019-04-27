import fontLoadState from './states/font-load-state';
import assetLoadState from './states/asset-load-state';
import playState from './states/play-state'; // initialize the play state in entry state to reset all the variables in play state
import entryState from './states/entry-state';
import aboutState from './states/about-state';
import premiseState from './states/premise-state';
import gameOverState from './states/game-over-state';
import instructionsState from './instructions-state';

const game = new Phaser.Game(640, 512, Phaser.AUTO, 'game', undefined, undefined, false);
game.state.add('FontLoad', fontLoadState(game));
game.state.add('AssetLoad', assetLoadState(game));
game.state.add('Entry', entryState(game));
game.state.add('About', aboutState(game));
game.state.add('Premise', premiseState(game));
game.state.add('GameOver', gameOverState(game));
game.state.add('Instructions', instructionsState(game));
game.state.add('Prisoners', prisonersInstructionsState(game));
game.state.add('Races', raceRelationsState(game));
game.state.start('FontLoad');
