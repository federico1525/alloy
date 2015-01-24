function close() {
	$.popup.close();
}

function showButtonWidth(e) {
	if (OS_MOBILEWEB) {
		alert('Button is ' + $.button.width);
	} else {
		alert('Button width is: ' + e.source.width);
	}
}

setTimeout(function() {

	// containerCheck

	// backViewCheck
	var backViewCheck = {
		"name" : "'backView check'",
		"key" : false
	};
	(function(o, check) {
		if (o.top == 0 && o.height == 100 && o.width == '100%' && o.backgroundColor == 'orange') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
	})($.backView, backViewCheck);

	// backLabelCheck
	var backLabelCheck = {
		"name" : "'backLabel check'",
		"key" : false
	};
	(function(o, check) {
		if (o.font.fontSize == '24dp' && o.font.touchable == false && o.color == 'white') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object false is: " + JSON.stringify(o));
		}
	})($.backLabel, backLabelCheck);

	
	// buttonCheck
	var buttonCheck = {
		"name" : "'button check'",
		"key" : false
	};
	(function(o, check) {
		if (o.bottom==="50" && o.height==="SIZE" && o.width===140 && o.title==='CLICK') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object false is: " + JSON.stringify(o));
		}
	})($.button, buttonCheck);



	// Array including the checks to be performed
	var propertyCheck = [backViewCheck.key, backLabelCheck.key, buttonCheck.key];



	// check machine
	// this should be reusable and I should build a module for this
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

