setTimeout(function(){
	$.mainLabel.text += ' ' + $.button.width;
	Ti.API.info($.button.width);
},400);

function close(){
	$.popupWin.close();
}

function openModal(){
	Alloy.createController("modal").getView('modalWin').open();
};


setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"name" : "'windowCheck check'",
		"key" : false
	};
	(function(o, check) {
		if (o.backgroundColor == 'purple') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.popupWin, windowCheck);

	// mainViewCheck
	var mainViewCheck = {
		"name" : "'mainViewCheck check'",
		"key" : false
	};
	(function(o, check) {
		if (o) {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.mainView, mainViewCheck);

	// backViewCheck
	var backViewCheck = {
		"name" : "'backView check'",
		"key" : false
	};
	(function(o, check) {
		if (o.top === 0 && o.backgroundColor === "orange" && o.width==="100%" && o.height===100) {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.backView, backViewCheck);

	// backLabelCheck
	var backLabelCheck = {
		"name" : "'backLabel check'",
		"key" : false
	};
	(function(o, check) {
		if (o.text === "Back" && o.font.fontSize === "24dp" && o.font.touchable===false && o.color==="white") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.backLabel, backLabelCheck);

	
	// mainLabelCheck
	var mainLabelCheck = {
		"name" : "'mainLabel check'",
		"key" : false
	};
	(function(o, check) {
		if (o.color==="white" && o.text==="PURPLE win bg - ORANGE Back view. Button width is: 150" && o.font.fontSize==="16dp" && o.bottom==="50") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.mainLabel, mainLabelCheck);

	// buttonCheck

	var buttonCheck = {
		"name" : "'button check'",
		"key" : false
	};
	(function(o, check) {
		if (o.width === 150 && o.height==="SIZE" && o.title === "open modal" && o.enabled === true) {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.button, buttonCheck);

	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, mainViewCheck.key, backViewCheck.key, backLabelCheck.key, mainLabelCheck.key, buttonCheck.key];

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
}, 800);
