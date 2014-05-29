function doClick(e) {  
    Alloy.createController('win1').getView().open();
}

$.button.title="Click! (Button width: " + $.button.width + ")";
 
$.mainWin.open();