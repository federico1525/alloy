var controls = require('controls');


function close(){
	$.win1.close();
}


// iOS check

setTimeout(function() {

// labelCheck
	var labelCheck = {
		"name" : "'labelCheck'",
		"key" : false
	};
	(function(o, check) {
		controls.getProp(o, check);
		if (o.font.fontSize==="18dp" && o.color==="green" && o.text==="Label and button title defined in XML inline. Styles applied. - Click to close") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.idLabel, labelCheck);

// buttonCheck
	var buttonCheck = {
		"name" : "'buttonCheck'",
		"key" : false
	};
	(function(o, check) {
		controls.getProp(o, check);
		if (o.title==="Close" && o.bottom==="5") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.button, buttonCheck);

	// Array including the checks to be performed
	var propertyCheck = [labelCheck.key, buttonCheck.key];


	controls.checkAndIncrement(propertyCheck);

}, 400);