var result = null;
var checkAndIncrement = require('controls').checkAndIncrement;
var saveResult = require('controls').saveResult;

$.button.addEventListener('click', function(){
  Alloy.createController('popup').getView().open();
})

$.mainWin.open();


Ti.API.info('#### INDEX window - checking compiled code');
// #### winCheck
  var windowCheck = {
    "name" : "'index windowCheck'",
    "key" : false
  };
  (function(o, obj){
    result = (o.backgroundColor==="blue" && o.fullscreen===false);
    saveResult(o, obj, result);
  })($.mainWin, windowCheck);


// #### labelCheck
var labelCheck = {
    "name" : "'index labelCheck'",
    "key" : false
  };
  (function(o, obj){
    result = (o.text==="White label on bg_gray.png background image" && o.color==="white" && o.font.fontSize==="18dp" && o.bubbleParent===true);
    saveResult(o, obj, result);
  })($.label, labelCheck);


// #### buttonCheck
var buttonCheck = {
    "name" : "'index buttonCheck'",
    "key" : false
  };
  (function(o, obj){
    result = (o.title==="click" && o.bottom==="5" && o.width==="90%");
    saveResult(o, obj, result);
  })($.button, buttonCheck);



  // Array including the checks to be performed
  var propertyCheck = [windowCheck.key, labelCheck.key, buttonCheck.key];
  checkAndIncrement(propertyCheck);
  

  // opening popup window
  setTimeout(function(){
    Alloy.createController('popup').getView().open();
  },1000);


