var controls = require('controls');


$.button.addEventListener('click', function(){
	Alloy.createController('win1').getView().open();
});

$.mainWindow.open();


// iOS check

setTimeout(function() {

// windowCheck
	var windowCheck = {
		"name" : "'windowCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.backgroundColor==="orange"){
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.mainWindow, windowCheck);

// labelCheck
	var labelCheck = {
		"name" : "'labelCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.font.fontSize==="18dp" && o.color==="green" && o.text===" iOS GLOBAL STYLES - Theme is setting Label text, changing color (green) and backgroundColor (orange). Button bottom and title set from scratch. fontSize set in generic style") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.mainLabel, labelCheck);

// buttonCheck
	var buttonCheck = {
		"name" : "'buttonCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
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


	controls.checkAndIncrement(propertyCheck);

}, 400);