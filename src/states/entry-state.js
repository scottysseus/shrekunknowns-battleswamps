import {FONT_COLOR} from "../common/constants";
import StateTransitionButton from "../common/StateTransitionButton";

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

            StateTransitionButton(game, 30,30, 'Start', "Store", "Play");
            StateTransitionButton(game, 30, 50+72,'About', "About");
        },

        update: function() {
            
        }
    }
};