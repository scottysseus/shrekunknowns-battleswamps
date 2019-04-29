import StateTransitionButton from "../common/StateTransitionButton";
import {FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
import playState from "./play-state";
import CreatureConstants from "./creatureConstants";
export default function instructionsState3(game) {
    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions3");
            game.state.add('Play', playState(game));
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Next >', "Instructions4");
            nextButton.anchor.setTo(1, 0);
            

            let BAG_X = 60;
            let BAG_Y = 90;

            let bagSprite = game.add.sprite(BAG_X,BAG_Y,"iconBag");
            bagSprite.alpha = 0.5;
            let bagOverlaySprite = game.add.sprite(BAG_X,BAG_Y,"iconBagOverlay");

            let row = 0;
            CreatureConstants.CREATURE_LIST.forEach((creatureProps) => {
                let creatureName = creatureProps.name;
                let y = BAG_Y + bagSprite.height - 16 - (row * 23);
                let x = BAG_X + 6;
                let icon = game.add.image(x,y, creatureName + 'Icon');
                let text = game.add.text(x + 16, y, ' x ' + 0, {font: 'Comic Sans MS', fill: FONT_COLOR, align: 'left', fontSize: '12px'});
                text.anchor.setTo(0, 0.5);
                text.fixedToCamera = true;
                icon.anchor.setTo(0, 0.5);
                ++row;
            });
            game.add.text(180, 180, "The bag to the left displays the number of\ncreatures yet to be sold.", DescriptionStyle);

            let COIN_Y = 340
            let COIN_X = 60;
            let coinSprite = game.add.sprite(COIN_X, COIN_Y, "coin");
            coinSprite.animations.add('rotate', [0,1,2,3,4,5,6,7], 14, true);
            coinSprite.animations.play('rotate');
            game.add.text(COIN_X + 20, COIN_Y, ' x ' + 0, {font: 'Comic Sans MS', fill: FONT_COLOR, align: 'left', fontSize: '12px'});
            game.add.text(180, COIN_Y, "The coin indicates your current amount of gold.", DescriptionStyle);

            let HEART_Y = 400;
            game.add.sprite(60, HEART_Y, 'heart');
            game.add.text(180, HEART_Y, "Your health is equal to the number of hearts.", DescriptionStyle);
        }
    };
}