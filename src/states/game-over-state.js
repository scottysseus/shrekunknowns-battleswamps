import { FONT_COLOR } from "../common/constants";
import StateTransitionButton from '../common/StateTransitionButton';
import TitleText from "../common/TitleText";
export default function gameOverState(game) {

    function create() {
        TitleText(game, game.width/2, game.width/2, 'Game Over');
        StateTransitionButton(game, 60, 30, '< Back', "Entry");
    }
    
    return {create};
}