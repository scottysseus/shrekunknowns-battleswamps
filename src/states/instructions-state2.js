import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
export default function instructionsState2(game) {
    let keyDescriptionMap = {
        'ARROW KEYS': 'Movement.',
        'A': 'Attack creatures.',
        'S': 'Capture creatures.',
        'SPACEBAR': 'Open shoppe menu (while near shoppe).'
    };


    let instructionsText = 'GOAL\n\nBuy all the items and earn 800 gold to buy back your swamp!';
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions");
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Instructions2.5");
            nextButton.anchor.setTo(1, 0);

            game.add.text(60, 90, instructionsText, DescriptionStyle);

            game.add.text(60, 230, "CONTROLS", DescriptionStyle);
            Object.keys(keyDescriptionMap).forEach((key, i) => {
                game.add.text(60, 280 + (i * 18), key, DescriptionStyle);
                game.add.text(240, 280 + (i * 18), keyDescriptionMap[key], DescriptionStyle);
            });
        }
    };
}