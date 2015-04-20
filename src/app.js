var gui = require('nw.gui'),
    win = gui.Window.get();

var mainMenu = new gui.Menu({type: 'menubar'});
if (mainMenu.createMacBuiltin) {
  mainMenu.createMacBuiltin('Scaleway');
}

win.menu = mainMenu;
