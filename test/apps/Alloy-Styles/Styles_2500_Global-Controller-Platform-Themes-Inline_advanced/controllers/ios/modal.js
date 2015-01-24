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

	Ti.API.info('#### MODAL window - checking compiled code');

// #### winCheck
  var modalWinCheck = {
    "name" : "'modal.js modalWinCheck'",
    "key" : false
  };
  (function(o, obj){
  	if (ENV_DEVELOPMENT){   // modal===true on emulators
      result = (o.backgroundColor==="blue" && o.fullscreen===false && o.modal===true && o.title==="modal with theme" && o.rightNavButton.title==="close");
    } else {                // modal===1 on devices
      result = (o.backgroundColor==="blue" && o.fullscreen===false && o.modal===1 && o.title==="modal with theme" && o.rightNavButton.title==="close");
    }
    
  	saveResult(o, obj, result);
  })($.modalWin, modalWinCheck);


// #### viewCheck
var viewCheck = {
    "name" : "'modal.js viewCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true && o.backgroundColor==="orange");
  	saveResult(o, obj, result);
  })($.mainView, viewCheck);


// #### label1Check
var label1Check = {
    "name" : "'modal.js label1Check'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true && o.top==="20" && o.font.fontSize==="22dp" && o.color==="yellow" && o.text==="YELLOW label - ORANGE bg");
  	saveResult(o, obj, result);
  })($.label1, label1Check);


  // #### label2Check
var label2Check = {
    "name" : "'modal.js label2Check'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.horizontalWrap===true && o.text==="iOS theme :: RED label - 14dpyou should see this one" && o.color==="red" && o.font.fontSize==="14dp" && o.top==="90");
  	saveResult(o, obj, result);
  })($.label2, label2Check);



  // #### button2Check
var buttonCheck = {
    "name" : "'modal.js buttonCheck'",
    "key" : false
  };
  (function(o, obj){
  	result = (o.title==="Close" && o.enabled===true && o.horizontalWrap===true);
  	saveResult(o, obj, result);
  })($.button2, buttonCheck);


  var propertyCheck = [modalWinCheck.key, viewCheck.key, label1Check.key, label2Check.key, buttonCheck.key];
  checkAndIncrement(propertyCheck);

},400);

setTimeout(function(){
  Alloy.Globals.winNumber = 1;
  // Ti.API.info("****** Setting winNumber to 1 and closing the modal window. winNumber is now: " + Alloy.Globals.winNumber);
  closeModal();
},1000);
