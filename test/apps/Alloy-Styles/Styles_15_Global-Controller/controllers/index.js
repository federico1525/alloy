$.button.addEventListener('click', function(){
	Alloy.createController('popup').getView().open();
});

$.mainWin.open();

setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"key" : false
	};
	(function(o, check) {
		if (o.backgroundColor == "blue") {
			Ti.API.info("#### this");
			check.key = true;
		}
		o, check = null;
	})($.mainWin, windowCheck);
	

	Ti.API.info(JSON.stringify($.mainLabel));

	// labelCheck
	var labelCheck = {
		"name" : "'mainLabel check'",
		"key" : false
	};
	
	(function(o, check) {
		if (o.color == "white" && o.font.fontSize == "16dp") {
			Ti.API.info("#### this");
			check.key = true;
		}
		o, check = null;
	})($.mainLabel, labelCheck);

	
	// buttonCheck
	var buttonCheck = {
		"name" : "'button check'",
		"key" : false
	};
	
	(function(o, check) {
		if (o.bottom==="5" && o.height==="SIZE" && o.width==='90%' && o.title==='click') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object false is: " + JSON.stringify(o));
		}
		o,check = null;
	})($.button, buttonCheck);
	
	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, labelCheck.key, buttonCheck.key];

	// check machine
	// this should be reusable
	var count = 0;
	for (var i = 0; i < propertyCheck.length; i++) {
		Ti.API.info("#### propertyCheck details:" + JSON.stringify(propertyCheck));
		Ti.API.info("#### propertyCheck[i] values: " + propertyCheck[i]);
		if (propertyCheck[i] == true) {
			count++;
			Ti.API.info('#### Count incremented. Current value: ' + count);
		}
	};
	if (count == propertyCheck.length) {
		alert('Styles applied correctly');
	} else {
		alert("Error - styles not applied correctly. Check the log for details.");
	};
}, 400);