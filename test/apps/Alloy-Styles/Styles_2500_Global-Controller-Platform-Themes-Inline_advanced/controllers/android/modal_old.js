var result = null;
var control = require('controls');
var checkAndIncrement = require('controls').checkAndIncrement;
var saveResult = require('controls').saveResult;

function closeModal(){
	$.modalWin.close()
};

var rigthNav = Ti.UI.createButton({
	title:'close'
});
rigthNav.addEventListener('click', closeModal);

$.modalWin.rightNavButton = rigthNav;


setTimeout(function checkCompiledCode(){

	Ti.API.info('#### MODAL window - checking compiled code')

// #### winCheck
  var modalWinCheck = {
    "name" : "'modal.js modalWinCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.bubbleParent===true && o._internalActivity.actionBar.title==="modal with theme" && o._internalActivity.actionBar.subtitle===null && o.backgroundColor==="blue" && o.backgroundRepeat===false && o.fullscreen===false);
  	saveResult(o, obj, result);
  })($.modalWin, modalWinCheck);


// #### viewCheck
var viewCheck = {
    "name" : "'modal.js viewCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.backgroundRepeat===false && o.backgroundColor==="orange");
  	saveResult(o, obj, result);
  })($.mainView, viewCheck);


// #### label1Check
var label1Check = {
    "name" : "'modal.js label1Check'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.top==="20" && o.color==="yellow" && o.text==="YELLOW label - ORANGE bg" && o.font.fontSize==="16dp" && o.backgroundRepeat===false);
  	saveResult(o, obj, result);
  })($.label1, label1Check);


  // #### label2Check
var label2Check = {
    "name" : "'modal.js label2Check'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.backgroundRepeat===false && o.text==="Android theme :: RED label - 14dp" && o.color==="red" && o.font.fontSize==="14dp" && o.rect.y===90 && o.rect.x===77);
  	saveResult(o, obj, result);
  })($.label2, label2Check);



  // #### button2Check
var buttonCheck = {
    "name" : "'modal.js buttonCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.title==="Close" && o.backgroundRepeat===false && o.rect.height===48 && o.rect.width===69 && o.rect.y===235 && o.rect.x===145);
  	saveResult(o, obj, result);
  })($.button2, buttonCheck);


  var propertyCheck = [modalWinCheck.key, viewCheck.key, label1Check.key, label2Check.key, buttonCheck.key];
  checkAndIncrement(propertyCheck);


},400);