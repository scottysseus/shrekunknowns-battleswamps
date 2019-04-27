import {FONT_COLOR} from "../common/constants";
import GenericButton from "../common/GenericButton";

export default function entryState(game) {
    return {
        preload: function() {
        },

        init: function() {
        },
 
        create: function() {
            let titleStyle = { font: '30px Comic Sans MS', fill: FONT_COLOR, align: 'center'};
            let text = game.add.text(game.world.centerX, 20, "ShrekUnknown's BattleSwamps", titleStyle);
            text.anchor.set(0.5);

            GenericButton(game, 30,30, 'Start', "Store", "Play");
            GenericButton(game, 30, 50,'About', "About");
        },

        update: function() {
            
        }
    }
};