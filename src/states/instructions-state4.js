import StateTransitionButton from "../common/StateTransitionButton";
import {ITEM_MAP, FONT_COLOR, ButtonStyle, DescriptionStyle} from "../common/constants";
import playState from "./play-state";
import CreatureConstants from "./creatureConstants";
export default function instructionsState3(game) {

    return {
        create: function () {
            StateTransitionButton(game, 60, 30, '< Back', "Instructions3");
            game.state.add('Play', playState(game));
            let nextButton = StateTransitionButton(game, game.width - 60, 30, 'Play >', "Play");
            nextButton.anchor.setTo(1, 0);
            

            let BAG_X = 60;
            let BAG_Y = 90;

            let storeSprite = game.add.sprite(BAG_X,BAG_Y,"store");
            game.add.text(200, BAG_Y + storeSprite.height / 2, "Press the space bar while standing in front\n" +
                "of the store to buy items and\nsell creatures.", DescriptionStyle);

            let col = 0;
            let ICON_X = 90;
            let ICON_Y = BAG_Y + storeSprite.height +  80;
            Object.keys(ITEM_MAP).forEach((itemName) => {
                let itemProps = ITEM_MAP[itemName];
                let y = ICON_Y;
                let x = ICON_X + 18 * col;
                let icon = game.add.image(x,y, itemProps.icon);
                ++col;
            });
            game.add.text(200, ICON_Y, "These icons at the top of your screen\nindicate owned items. Except for Swamp Bubble,\nall items can only be bought once.", DescriptionStyle);
        }
    };
}