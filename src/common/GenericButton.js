import {FONT_COLOR, ButtonStyle} from "../common/constants";

// instance of the game, x coordinate, y coordinate, button display text, and state to move to
const GenericButton = (game, x, y, btnName, ...state) => {
    const genericButton = game.add.text(x, y, btnName, ButtonStyle);
    genericButton.inputEnabled = true;
    genericButton.events.onInputUp.add(function () {
        if (state.length > 1) {
            for(let i = 0; i < state.length; i++) {
                game.state.start(state[i]);
            }
        } else {
            game.state.start(state[0]);
        }
    });
    genericButton.events.onInputOver.add((( ) => {
        genericButton.alpha = .5;
    }), this);
    genericButton.events.onInputOut.add(() => {
        genericButton.alpha = 1;
    }, this);
};

export default GenericButton;