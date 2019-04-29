import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
export default function instructionsState2(game) {

    let donkeySprite;
    let frame = 0;
    return {
        create: function () {

            StateTransitionButton(game, 60, 30, '< Back', "Instructions2");
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Instructions3");
            nextButton.anchor.setTo(1, 0);

            game.add.text(60, 90, "COMBAT", DescriptionStyle);
            let donkeyY = 200;
            donkeySprite = game.add.sprite(90, donkeyY, "donkey");
            donkeySprite.animations.add("donkeyWalk", [0, 1, 2, 0], 12, true);
            game.add.text(200, 150, "Attacking creatures damages them. Critically\n" +
                                        "damaged creatures can be captured with the\n" +
                                        "net. Creatures flash when critically damaged.\n" +
                                        "Hitting a critically damaged\n" +
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