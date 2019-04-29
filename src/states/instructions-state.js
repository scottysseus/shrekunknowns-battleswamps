import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
export default function instructionsState(game) {
    let instructionsText = '\n\n Shrek needs more gold to buy back his swamp!\n\n'
                         + 'The Royal Guards are paying a pretty penny in exchange\n for mythical Creatures...\n\n'
                         + "What's an Orge to do? Go to the would-be-king to talk?\n\n...Nah rounding up these things seems way easier.\n\n";
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Entry");
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Instructions2");
            nextButton.anchor.setTo(1, 0);
            let generatedText = game.add.text(60, 90, instructionsText, DescriptionStyle);
        }
    };
}