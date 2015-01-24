function doClick(e) {  
    Alloy.createController('win1').getView().open();
}

$.button.title='Click! (Width: ' + $.button.width + ')';
 
$.mainWin.open();