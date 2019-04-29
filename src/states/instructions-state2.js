import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
export default function instructionsState2(game) {
    let instructionsText = 'Controls:\nMove left with left arrow key.\nMove right with right arrow key.\nJump with up arrow key.\nFall fast* with down arrow key.\n'
                         + 'Attack creatures with \"A\" key.\nUse net to catch creatures with \"S\" key.\nOpen the Shoppe with Spacebar**.\n\nCreatures can not be caught utill they are weak enough.\nHit creatures so that way they can be catchable.'
                         + '\n\n*Swamp Bubble Power-up only.\n**Shrek needs to be standing at the Shoppe.';
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions");
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Instructions3");
            nextButton.anchor.setTo(1, 0);
            let generatedText = game.add.text(60, 90, instructionsText, DescriptionStyle);
        }
    };
}