import {FONT_COLOR, ButtonStyle} from "../common/constants";
import GenericButton from "./GenericButton";

// instance of the game, x coordinate, y coordinate, button display text, and state to move to
const StateTransitionButton = (game, x, y, btnName, ...state) => {
    return GenericButton(game, x, y, btnName, () => {
        if (state.length > 1) {
            for(let i = 0; i < state.length; i++) {
                game.state.start(state[i]);
            }
        } else {
            game.state.start(state[0]);
        }
    });
};

export default StateTransitionButton;