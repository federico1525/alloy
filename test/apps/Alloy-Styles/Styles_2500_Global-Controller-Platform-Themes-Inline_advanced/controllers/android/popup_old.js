var result = null;
var checkAndIncrement = require('controls').checkAndIncrement;
var saveResult = require('controls').saveResult;

function close(){
	$.mainWin.close();
}

function openModal(){
	Alloy.createController("modal").getView('modalWin').open()
};

setTimeout(function(){
	$.aboutButton.text += ' ' + $.button.width;
	Ti.API.info($.button.width);


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
  	result = (o.bubbleParent===true);
  	saveResult(o, obj, result);
  })($.mainView, viewCheck);


// #### backViewCheck
var backViewCheck = {
    "name" : "'popup.js backViewCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.backgroundColor==="green" && o.height===100 && o.width==="100%" && o.bubbleParent===true);
  	saveResult(o, obj, result);
  })($.backView, backViewCheck);



// #### label1Check
var label1Check = {
    "name" : "'popup.js label1Check'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.bubbleParent===true && o.text==="GREEN bg - PURPLE label : Click for Back" && o.color==="purple" && o.font.fontSize==="20dp" && o.font.touchable===false);
  	saveResult(o, obj, result);
  })($.label1, label1Check);



  // #### label2Check
var aboutButtonLabelCheck = {
    "name" : "'popup.js aboutButtonLabelCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.bottom==="50" && o.text==="PURPLE bg - WHITE label - Button width: 60%" && o.color==="white" && o.font.fontSize==="18dp");
  	saveResult(o, obj, result);
  })($.aboutButton, aboutButtonLabelCheck);



 // #### button // doing it in another way... pretty much the same
	var buttonCheck = {
		"name" : "'popup.js buttonCheck'",
		"key" : false
	};
	result = ($.button.width==="60%" && $.button.height==="size" && $.button.title==="open modal");
	saveResult($.button, buttonCheck, result);
	result = null;


  var propertyCheck = [windowCheck.key, viewCheck.key, backViewCheck.key, label1Check.key, aboutButtonLabelCheck.key, buttonCheck.key];
  checkAndIncrement(propertyCheck);


},400);

