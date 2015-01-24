var controls = require('controls');

function doClick(e) {
	alert($.label.text);
}

$.mainWin.open();

//windowCheck

//labelCheck

setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"name" : "'windowCheck'",
		"key" : false
	};
	(function(o, check) {
		if (o.backgroundColor === "white" && o.barColor) {
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
		if (o.height === "size" && o.color === "red" && o.width === "fill" && o.text === "RED label - GRAY label bg - WHITE window bg" && o.font.fontSize == '24dp' && o.backgroundColor === "gray") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.label, labelCheck);

	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, labelCheck.key];

	controls.checkAndIncrement(propertyCheck);

}, 400);
