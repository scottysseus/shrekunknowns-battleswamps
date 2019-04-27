import {FONT_COLOR, ButtonStyle} from "../common/constants";
import GenericButton from "./GenericButton";

const GitButton = (game, x, y, btnName, link) => {
    GenericButton(game, x, y, btnName, () => {
        window.open(link);
    });
};

export default GitButton;