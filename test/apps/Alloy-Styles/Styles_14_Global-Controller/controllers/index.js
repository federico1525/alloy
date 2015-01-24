$.button.addEventListener('click', function() {
	Alloy.createController('popup').getView().open();
	// win.open();
});

setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"key" : false
	};
	
	if ($.mainWin.backgroundColor == 'blue') {
		windowCheck.key = true;
	}

	Ti.API.info(JSON.stringify($.mainLabel));

	// labelCheck
	var labelCheck = {
		"key" : false
	};
	
	checkObject = function(o, check) {
		if (o.color == "white" && o.font.fontSize == "18dp") {
			Ti.API.info("#### this");
			check.key = true;
		}
	};
	checkObject($.mainLabel, labelCheck);


	
	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, labelCheck.key];

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

$.mainWin.open();
