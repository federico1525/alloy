var controls = require('controls');


$.button.addEventListener('click', function(){
	Alloy.createController('win1').getView().open();
});

$.mainWin.open();


// iOS check

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
		if (o.height==="SIZE" && o.color==="black" && o.horizontalWrap===true && o.width==="SIZE" && o.text==="YELLOW view" && o.font.fontSize==="18dp") {
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
		if (o.horizontalWrap===true && o.height==="SIZE" && o.color==="green" && o.width==="SIZE" && o.text==="iOS platform - ORANGE bg, GREEN label" && o.font.fontSize==="18dp") {
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
		if (o.enabled===true && o.horizontalWrap===true && o.title==="click" && o.bottom==="5") {
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



