function closeModal() {
	$.modalWin.close()
};

var rigthNav = Ti.UI.createButton({
	title : 'close'
});
rigthNav.addEventListener('click', closeModal);

$.modalWin.rightNavButton = rigthNav;

setTimeout(function() {

	// windowCheck
	var windowCheck = {
		"name" : "'windowCheck check'",
		"key" : false
	};
	(function(o, check) {
		if (o.title == "modal" && o.backgroundColor == 'blue') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.modalWin, windowCheck);

	// mainViewCheck
	var mainViewCheck = {
		"name" : "'mainViewCheck check'",
		"key" : false
	};
	(function(o, check) {
		if (o.backgroundColor == 'orange') {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.mainView, mainViewCheck);

	// label1Check
	var label1Check = {
		"name" : "'label1Check check'",
		"key" : false
	};
	(function(o, check) {
		if (o.text == "Modal window test" && o.top == "20" && o.color === "black" && o.font.fontSize === "22dp") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.label1, label1Check);

	// label2Check
	var label2Check = {
		"name" : "'label2Check check'",
		"key" : false
	};
	(function(o, check) {
		if (o.text == "Text in black on orange backgroundColor" && o.color === "black" && o.font.fontSize === "14dp") {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.label2, label2Check);

	// buttonCheck

	var buttonCheck = {
		"name" : "'buttonCheck check'",
		"key" : false
	};
	(function(o, check) {
		if (o.bottom === "30" && o.title === "Close" && o.enabled === true) {
			Ti.API.info("#### " + check.name + " is true");
			check.key = true;
		} else {
			Ti.API.info("#### " + check.name + " failed");
			Ti.API.info(JSON.stringify(o));
		}
		o.check = null;
	})($.modalButton, buttonCheck);

	// Array including the checks to be performed
	var propertyCheck = [windowCheck.key, mainViewCheck.key, label1Check.key, label2Check.key, buttonCheck.key];

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

