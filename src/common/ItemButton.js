import {FONT_COLOR, ButtonStyle} from "../common/constants";

// instance of the game, x coordinate, y coordinate, button display text, and state to move to
const ItemButton = (game, x, y, btnName, callback) => {
    const itemButton = game.add.text(x, y, btnName, ButtonStyle);
    /*itemButton.setTextBounds(x, y, 100, 100);
    itemButton.style.align = "left";
    itemButton.style.boundsAlignH = "left";
    itemButton.style.boundsAlignV = "top";*/
    itemButton.inputEnabled = true;
    itemButton.events.onInputUp.add(callback);
    itemButton.events.onInputOver.add((( ) => {
        itemButton.alpha = .5;
    }), this);
    itemButton.events.onInputOut.add(() => {
        itemButton.alpha = 1;
    }, this);

    return itemButton;
};

export default ItemButton;