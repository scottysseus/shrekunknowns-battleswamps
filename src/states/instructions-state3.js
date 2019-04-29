import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
import playState from "./play-state";
export default function instructionsState3(game) {
    let instructionsText = 'Controls:\nMove left with left arrow key.\nMove right with right arrow key.\nJump with up arrow key.\nFall fast* with down arrow key.\n\n'
                         + ''
                         + '\n\n\n*Swamp Bubble Power-up only.';
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions2");
            game.state.add('Play', playState(game));
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Play >', "Play");
            nextButton.anchor.setTo(1, 0);
            let generatedText = game.add.text(60, 90, instructionsText, DescriptionStyle);

            let bagSprite = game.add.sprite(60,90,"iconBag");
            bagSprite.alpha = 0.5;
            let bagOverlaySprite = game.add.sprite(60,90,"iconBagOverlay");
        }
    };
}