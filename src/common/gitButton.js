import {FONT_COLOR, ButtonStyle} from "../common/constants";

const GitButton = (game, x, y, btnName, link) => {
    const gitButton = game.add.text(x, y, btnName, ButtonStyle);
    gitButton.inputEnabled = true;
    gitButton.events.onInputUp.add(function () {
        window.open(link);
    });
    gitButton.events.onInputOver.add((( ) => {
        gitButton.alpha = .5;
    }), this);
    gitButton.events.onInputOut.add(() => {
        gitButton.alpha = 1;
    }, this);
};

export default GitButton;