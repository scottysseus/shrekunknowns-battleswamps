import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
import playState from "./play-state";
export default function instructionsState(game) {
    let instructionsText = 'Shrek needs more gold to buy back his his Swamp land!\n\n'
                         + 'The Royal Guards are paying a pretty penny in exchange\n for mythical Creatures...\n\n'
                         + 'Whats an Orge to do? Go to the would-be-king to talk?\n\n...Nah rounding up these things seems way easier.\n\n';
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions");
            game.state.add('Play', playState(game));
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Play");
            nextButton.anchor.setTo(1, 0);
            let generatedText = game.add.text(60, 90, instructionsText, DescriptionStyle);
        }
    };
}