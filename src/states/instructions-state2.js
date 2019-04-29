import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
export default function instructionsState2(game) {

    let donkeySprite;
    let frame = 0;
    let keyDescriptionMap = {
        'ARROW KEYS': 'Movement*.',
        'A': 'Attack creatures.',
        'S': 'Capture creatures.',
        'SPACEBAR': 'Open shoppe menu**.'
    };


    let instructionsText = '*The DOWN key performs a bounce only with the Swamp Bubble\n  Power-up enabled.\n**Shrek needs to be standing at the Shoppe.';
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions");
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Instructions3");
            nextButton.anchor.setTo(1, 0);

            game.add.text(60, 90, "CONTROLS:", DescriptionStyle);
            Object.keys(keyDescriptionMap).forEach((key, i) => {
                game.add.text(60, 120 + (i * 18), key, DescriptionStyle);
                game.add.text(240, 120 + (i * 18), keyDescriptionMap[key], DescriptionStyle);
            });
            game.add.text(60, 230, instructionsText, DescriptionStyle);

            game.add.text(60, 320, "COMBAT:", DescriptionStyle);
            let donkeyY = 350;
            donkeySprite = game.add.sprite(90, donkeyY, "donkey");
            donkeySprite.animations.add("donkeyWalk", [0, 1, 2, 0], 12, true);
            game.add.text(200, donkeyY, "Attacking creatures damages them.Critically damaged\n" +
                                        "creatures can be captured with the net. Creatures flash\n" +
                                        "when critically damaged. Hitting a critically damaged\n" +
                                        "creature destroys it.", DescriptionStyle);
        },
        update: function() {
            ++frame;
            donkeySprite.alpha = frame % 4 >= 2 ? 0.1 : 1;
            if(frame > 2000000000) {
                frame = 0;
            }
        }
    };
}