import { FONT_COLOR } from "../common/constants";
import GenericButton from "../common/GenericButton";
export default function gameOverState(game) {

    function create() {
        let titleStyle = { font: '30px Comic Sans MS', fill: FONT_COLOR, align: 'center'};
        let text = game.add.text(game.world.centerX, game.world.centerY, 'Game Over', titleStyle);
        text.anchor.set(0.5);

        GenericButton(game, 60, 30, '< Back', "Entry");
    }
    
    return {create};
}