import GenericButton from "../common/GenericButton";
import {FONT_COLOR, ButtonStyle} from "../common/constants";
export default function instructionsState(game) {

    let instructionsTextStyle = { font: '10px Comic Sans MS', fill: FONT_COLOR, align: 'left', wordWrap: true, wordWrapWidth: game.width-60};
    let instructionsText = 'Shrek needs more gold to buy back his his Swamp land!\n\n'
                         + 'The Royal Guards are paying a pretty penny in exchange for mythical Creatures...\n\n'
                         + 'Whats an Orge to do? Go to the would-be-king to talk?...Nah rounding up these things seems way easier.\n\n'
                         + '3. While attending to a prisoner, you can escort them to a cell or to the chopping block.\n\n'
                         + '4. Cells can hold two prisoners, and they interact with each other. Some prisoners kill each other (good),'
                         + 'but if two prisoners of the same type share a cell for too long, they can escape (bad)!\n\n'
                         + '5. Each prisoner who escapes takes one of your lives with them!\n\n'
                         + '6. The chopping block requires the axe to be sharpened after each use (its availability can be seen at the top).';

    function create() {

        GenericButton(game, 60, 30, '< Back', "Entry");
        let racesButton = game.add.text(game.world.width - 240, 30, 'Prisoners >', ButtonStyle);

        racesButton.inputEnabled = true;
        racesButton.events.onInputUp.add(() => {
            game.state.start('Prisoners');
        });

        game.add.text(60, 90, instructionsText, instructionsTextStyle);
    }

    return {create};
}