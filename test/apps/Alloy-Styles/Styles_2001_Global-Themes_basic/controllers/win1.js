var controls = require('controls');

function close(){
	$.mainWin.close();
}

setTimeout(function() {

// windoCheck
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
	})($.mainWin, windowCheck);

// viewCheck
	var win1topView = {
		"name" : "'viewCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.top==="5" && o.backgroundColor==="white" && o.height===50 && o.horizontalWrap===true) {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.win1topView, win1topView);


// labelCheck1
	var labelCheck1 = {
		"name" : "'labelCheck1'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.text==="BLACK label - WHITE bg" && o.color==="black" && o.horizontalWrap===true && o.font.fontSize==="18dp") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.label1, labelCheck1);


	// labelCheck2
	var labelCheck2 = {
		"name" : "'labelCheck2'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.horizontalWrap===true && o.color==="green" && o.text==="Label and button title defined in XML inline. Styles applied. - Click to close" && o.font.fontSize==="18dp") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.label2, labelCheck2);

	// buttonCheck
	var buttonCheck = {
		"name" : "'buttonCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.enabled===true && o.horizontalWrap===true && o.title==="Close" && o.bottom==="5") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.button, buttonCheck);


	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, win1topView.key, labelCheck1.key, labelCheck2.key, buttonCheck.key];


	controls.checkAndIncrement(propertyCheck);

}, 400);