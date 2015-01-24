var result = null;
var checkAndIncrement = require('controls').checkAndIncrement;
var printResult = require('controls').printResult;


setTimeout(function(){
	$.aboutButton.text += ' ' + $.button.width;
	Ti.API.info($.button.width);

// winCheck
  var windowCheck = {
    "name" : "'popup.js windowCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.backgroundColor==="purple" && o.fullscreen===false);
  	printResult(o, obj, result);
  	result = null;
  })($.mainWin, windowCheck);

//viewCheck
var viewCheck = {
    "name" : "'popup.js viewCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true);
  	printResult(o, obj, result);
  	result = null;
  })($.mainView, viewCheck);


  var propertyCheck = [windowCheck.key, viewCheck.key];
  checkAndIncrement(propertyCheck);

},400);

function close(){
	$.mainWin.close();
}

function openModal(){
	Alloy.createController("modal").getView('modalWin').open()
};