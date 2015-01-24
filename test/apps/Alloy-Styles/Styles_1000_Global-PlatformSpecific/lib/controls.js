exports.checkAndIncrement = function (args){

	args = args || {};
	
	var count = 0;
	for (var i = 0; i < args.length; i++) {
		// Ti.API.info("#### propertyCheck details:" + JSON.stringify(args));
		Ti.API.info("#### propertyCheck[i] values: " + i + " - " + args[i]);
		if (args[i] == true) {
			count++;
			Ti.API.info('#### Count incremented. Current value: ' + count);
		}
	};
	if (count == args.length) {
		alert('Styles applied correctly');
	} else {
		alert("Error - styles not applied correctly. Check the log for details.");
	};
};

exports.getProp = function (o, check){
	Ti.API.info("#### PROPERTIES #### " + check.name + ": object  properties are: " + JSON.stringify(o));
};

