exports.checkAndIncrement = function (args){

	args = args || {};
	
	var count = 0;
	for (var i = 0; i < args.length; i++) {
		// Ti.API.info("#### propertyCheck details:" + JSON.stringify(args));
		// Ti.API.info("#### propertyCheck[i] values: " + i + " - " + args[i]);
		if (args[i] == true) {
			count++;
			// Ti.API.info('#### Count incremented. Current value: ' + count);
		}
	};
	if (count == args.length) {
		Ti.API.info("#### [PASS] -  Compiled code check successful");
		// Ti.API.info("***** winNumber is: " + Alloy.Globals.winNumber);
		// Ti.API.info("***** checkNumber is: " + Alloy.Globals.checkNumber);
		// alert('Styles applied correctly');
	} else {
		Ti.API.info("#### [FAIL] - Styles not applied correctly. Check the log for details.")
		// alert("#### [FAIL] - Styles not applied correctly. Check the log for details.");
	};
};

exports.saveResult = function(o, check, args) {
	if(args){
		// Ti.API.info("#### " + check.name + " is true");
		check.key = true;

	} else {
		// Ti.API.info(check.name + " failed");
		Ti.API.info("#### [FAIL] Object" + check.name + " check failed: " + JSON.stringify(o));
	}
	o = check = args = null;
}


// Getter method just in case you need to get the properties
exports.getProp = function (o, check){
	Ti.API.info("#### PROPERTIES #### " + check.name);
	Ti.API.info(": object  properties are: " + JSON.stringify(o));
	Ti.API.info("####");
};

