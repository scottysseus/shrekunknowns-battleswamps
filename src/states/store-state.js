import {FONT_COLOR} from "../common/constants";
import ResumeButton from "../common/ResumeButton";

export default function storeState(game) {

    let textCrawlStyle = { font: '15px Comic Sans MS', fill: FONT_COLOR, align: 'left', wordWrap: true, wordWrapWidth: game.width-60};
    let textCrawl = 'Store\n\n'
                    + 'TODO: ADD ITEMS TO STORE TO BUY\n'
                    + ' TAKE INTO ACCOUNT THE CURRENCY OF SHREK\n\n'
                    + 'BUY BUTTON\n\n';

    return {
        create: function() {
            ResumeButton(game, 60, 30, '< Back', "Play");

            const aboutText = game.add.text(60, 90, textCrawl, textCrawlStyle);
        }
    };
};