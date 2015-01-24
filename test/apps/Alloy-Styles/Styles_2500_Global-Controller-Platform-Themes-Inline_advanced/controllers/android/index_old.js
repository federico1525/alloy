var checkAndIncrement = require('controls').checkAndIncrement;
var getProp = require('controls').getProp;

$.button.addEventListener('click', function(){
	Alloy.createController('popup').getView().open();
})

$.mainWin.open();


setTimeout(function() {

// winCheck
  var windowCheck = {
    "name" : "'windowCheck'",
    "key" : false
  };
  (function(o, check) {
    // getProp(o, check);
    if (o.backgroundColor==="blue" && o.fullscreen===false){
      Ti.API.info("#### " + check.name + " is true");
      check.key = true;
    } else {
      Ti.API.info(check.name + " failed");
      Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
    }
  })($.mainWin, windowCheck);

// labelCheck
  var labelCheck = {
    "name" : "'labelCheck'",
    "key" : false
  };
  (function(o, check) {
    // getProp(o, check);
    if (o.text==="White label on bg_gray.png background image" && o.color==="white" && o.font.fontSize==="18dp" && o.bubbleParent===true) {
      Ti.API.info("#### " + check.name + " is true");
      check.key = true;
    } else {
      Ti.API.info(check.name + " failed");
      Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
    }
  })($.label, labelCheck);

  // buttonCheck
  var buttonCheck = {
    "name" : "'buttonCheck'",
    "key" : false
  };
  (function(o, check) {
    // getProp(o, check);
    if (o.title==="click" && o.bottom==="5") {
      Ti.API.info("#### " + check.name + " is true");
      check.key = true;
    } else {
      Ti.API.info(check.name + " failed");
      Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
    }
  })($.button, buttonCheck);


  // Array including the checks to be performed
  var propertyCheck = [windowCheck.key, labelCheck.key, buttonCheck.key];
  checkAndIncrement(propertyCheck);
  
}, 400);
