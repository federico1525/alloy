var controls = require('controls');

function doClick(e) {  
    alert($.label.text);
}
 
if (!OS_MOBILEWEB){
Ti.API.info('#### ' + JSON.stringify($.label)); 
}

$.mainWindow.open();

setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"name" : "'windowCheck'",
		"key" : false
	};
	(function(o, check) {
		if (o.backgroundColor==="white" && o.barColor==="orange"){
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
		if (o.height==="size" && o.color==="purple" && o.width==="fill" && o.text==="PURPLE label - GRAY label bg - WHITE window bg" && o.font.fontSize == '24dp' && o.backgroundColor==="gray") {
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