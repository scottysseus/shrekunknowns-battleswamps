import {DescriptionStyle} from "../common/constants";
import StateTransitionButton from '../common/StateTransitionButton';
import TitleText from "../common/TitleText";
export default function victoryState(game) {

    function create() {
        TitleText(game, game.width/2, 90, 'Victory!');
        StateTransitionButton(game, 60, 30, '< Back', "Entry");
        game.add.text(60, 120, "You can buy back your swamp! And all it took was the lives\nof a few fairy tale creatures!", DescriptionStyle);
    }
    
    return {create};
}