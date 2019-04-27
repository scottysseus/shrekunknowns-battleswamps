import {FONT_COLOR, ButtonStyle} from "../common/constants";

// instance of the game, x coordinate, y coordinate, button display text, and state to move to
const ResumeButton = (game, x, y, btnName, state) => {
    const ResumeButton = game.add.text(x, y, btnName, ButtonStyle);
    ResumeButton.inputEnabled = true;
    ResumeButton.events.onInputUp.add(() => {
        game.state.start(state);
        //game.state.current = state;
    });
    ResumeButton.events.onInputOver.add((( ) => {
        ResumeButton.alpha = .5;
    }), this);
    ResumeButton.events.onInputOut.add(() => {
        ResumeButton.alpha = 1;
    }, this);
};

export default ResumeButton;