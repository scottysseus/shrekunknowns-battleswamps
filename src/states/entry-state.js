import StateTransitionButton from "../common/StateTransitionButton";
import TitleText from '../common/TitleText';
import playState from "./play-state";

const TITLE_Y = 70;

export default function entryState(game) {
    return {
        preload: function() {
        },

        init: function() {
        },
 
        create: function() {
            TitleText(game, game.width / 2, TITLE_Y, "Shrek Unknown's\nBattleSwamps");

            StateTransitionButton(game, 30,TITLE_Y + 72, "Play", "Instructions");
            StateTransitionButton(game, 30, TITLE_Y + 72 * 2,'About', "About");
        },

        update: function() {
            
        }
    }
};