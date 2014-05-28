function doClick(e) {  
    Alloy.createController('win1').getView().open();
}

$.button.title="Click! (" + $.button.width + ")";
 
$.mainWin.open();