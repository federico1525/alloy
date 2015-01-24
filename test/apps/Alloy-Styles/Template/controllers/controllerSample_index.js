var controls = require('controls');


$.button.addEventListener('click', function(){
	Alloy.createController('win1').getView().open();
});

$.mainWin.open();


setTimeout(function() {

// winCheck
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
	var viewCheck = {
		"name" : "'viewCheck'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.top==="5" && o.backgroundColor==="yellow" && o.height===50) {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.topView, viewCheck);


// labelCheck1
	var labelCheck1 = {
		"name" : "'labelCheck1'",
		"key" : false
	};
	(function(o, check) {
		// controls.getProp(o, check);
		if (o.height==="size" && o.color==="black" && o.width==="size" && o.text==="YELLOW view" && o.font.fontSize==="18dp") {
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
		if (o.height==="size" && o.color==="green" && o.width==="size" && o.text==="ANDROID platform - ORANGE bg, GREEN label" && o.font.fontSize==="18dp") {
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
		if (o.title==="click" && o.bottom==="5") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info(check.name + " failed");
			Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
		}
	})($.button, buttonCheck);


	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, viewCheck.key, labelCheck1.key, labelCheck2.key, buttonCheck.key];


	controls.checkAndIncrement(propertyCheck);

}, 400);



