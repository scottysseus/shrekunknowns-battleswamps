import {MARGIN} from "../common/constants";
export default function StoreMenu(game) {

    var menuContainer;
    var width = game.width - MARGIN * 2 // example;
    var height = game.height - MARGIN * 2 // example;

    var bmd = game.add.bitmapData(width, height);
     
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, width, height);
    bmd.ctx.fillStyle = '#000000';
    bmd.ctx.fill();
    menuContainer = game.add.sprite(game.camera.x + (game.width/2), game.camera.y + (game.height/2), bmd);
    menuContainer.anchor.setTo(0.5, 0.5);
    menuContainer.bringToTop();
    menuContainer.alpha = 0.75;  
    return menuContainer;
}