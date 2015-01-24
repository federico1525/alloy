var controls = require('controls');


function doClick(e) {  
	$.mainWin.close()
};

setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"name" : "'windowCheck'",
		"key" : false
	};
	(function(o, check) {
		controls.getProp(o, check);
		if (o.backgroundColor==="orange" && o.top===20 && o.id==="mainWin" && o.orientationModes===null && o.horizontalWrap===true && o.barImage===null && o.barColor===null && o.translucent===null && o.navBarHidden===false && o.titleAttributes===null && o.navTintColor===null && o.tabBarHidden===false){
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
		controls.getProp(o, check);
		if (o.color==="white" && o.text==="You should see this (xml text) - same style" && o.top==="10" && o.font.fontSize==="30dp" && o.backgroundColor==="purple") {
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
		controls.getProp(o, check);
		if (o.bottom===10 && o.height==="SIZE" && o.width==="80%" && o.borderColor==="white" && o.borderWidth===2 && o.title==="Close") {
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
 