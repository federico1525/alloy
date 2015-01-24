var result = null;
var checkAndIncrement = require('controls').checkAndIncrement;
var saveResult = require('controls').saveResult;

function close(){
	$.mainWin.close();
}

function openModal(){
	Alloy.createController("modal").getView('modalWin').open()
};

function closePopup(){
  // Ti.API.info("***** Checking winNumber : " + Alloy.Globals.winNumber);
  if(Alloy.Globals.winNumber === 1){
    // Ti.API.info("****** Win number is 1, therefore I'm closing the popup window");
    close();
    Alloy.Globals.winNumber = 0;
    // Ti.API.info("***** I've set Win number to 0. check winNumber: " + Alloy.Globals.winNumber);
  };
}


setTimeout(function(){
	$.aboutButton.text += ' ' + $.button.width;
	Ti.API.info($.button.width);
},400);


Ti.API.info('#### POPUP window - checking compiled code');
// #### winCheck
  var windowCheck = {
    "name" : "'popup.js windowCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.backgroundColor==="purple" && o.fullscreen===false);
  	saveResult(o, obj, result);
  })($.mainWin, windowCheck);


// #### viewCheck
var viewCheck = {
    "name" : "'popup.js viewCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true);
  	saveResult(o, obj, result);
  })($.mainView, viewCheck);


// #### backViewCheck
var backViewCheck = {
    "name" : "'popup.js backViewCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true);
  	saveResult(o, obj, result);
  })($.backView, backViewCheck);



// #### label1Check
var label1Check = {
    "name" : "'popup.js label1Check'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true);
  	saveResult(o, obj, result);
  })($.label1, label1Check);



  // #### label2Check
var aboutButtonLabelCheck = {
    "name" : "'popup.js aboutButtonLabelCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true);
  	saveResult(o, obj, result);
  })($.aboutButton, aboutButtonLabelCheck);



 // #### button // doing it in another way... pretty much the same
	var buttonCheck = {
		"name" : "'popup.js buttonCheck'",
		"key" : false
	};
	result = ($.button.title==="open modal" && $.button.width===100 && $.button.height==="SIZE" && $.button.horizontalWrap===true && $.button.enabled===true);
	saveResult($.button, buttonCheck, result);
	result = null;


  var propertyCheck = [windowCheck.key, viewCheck.key, backViewCheck.key, label1Check.key, aboutButtonLabelCheck.key, buttonCheck.key];
  checkAndIncrement(propertyCheck);


  setTimeout(function(){
    openModal();
  },1000)


