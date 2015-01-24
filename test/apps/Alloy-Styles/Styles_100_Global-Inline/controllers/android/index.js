var controls = require('controls');


function doClick(e) {  
    Alloy.createController('win1').getView().open();
}

$.button.title="Click! (" + $.button.width + ")";
 
$.mainWin.open();


setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"name" : "'windowCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.backgroundColor==="orange" && o.top===20){
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
		o, check = null;
	})($.mainWin, windowCheck);

	// labelCheck
	var labelCheck = {
		"name" : "'labelCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.color==="white" && o.text==="You should see this - ORANGE window, white label, 30dp, PURPLE label bgc" && o.top==="10" && o.font.fontSize==="30dp" && o.backgroundColor==="purple") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
		o, check = null;
	})($.label, labelCheck);

	//buttonCheck
	var buttonCheck = {
		"name" : "'buttonCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.bottom===10 && o.height==="size" && o.width==="80%" && o.borderColor==="white" && o.title==="Click! (80%)") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
		o, check = null;
	})($.button, buttonCheck);
	

	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, labelCheck.key, buttonCheck.key];


	controls.checkAndIncrement(propertyCheck);

}, 400);