import {BaseStyle} from "./constants";

let titleStyle = {...BaseStyle, fontSize: '48px'};
titleStyle.align = 'center';

export default function TitleText(game, x, y, contents) {
    let text = game.add.text(x, y, contents, titleStyle);
    text.anchor.set(0.5);
}