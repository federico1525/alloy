var result = null;
var checkAndIncrement = require('controls').checkAndIncrement;
var saveResult = require('controls').saveResult;

function close() {
	$.popup.close();
}

function openModal() {
	Alloy.createController("modal").getView('modalWin').open()
};

function closePopup() {
	// Ti.API.info("***** Checking winNumber : " + Alloy.Globals.winNumber);
	if (Alloy.Globals.winNumber === 1) {
		// Ti.API.info("****** Win number is 1, therefore I'm closing the popup window");
		close();
		Alloy.Globals.winNumber = 0;
		// Ti.API.info("***** I've set Win number to 0. check winNumber: " + Alloy.Globals.winNumber);
	};
}

Ti.API.info('#### POPUP window - checking compiled code');
// #### winCheck
var windowCheck = {
	"name": "'POPUP windowCheck'",
	"key": false
};
(function(o, obj) {
	result = (o.backgroundColor === "purple" && o.fullscreen === false);
	saveResult(o, obj, result);
})($.popup, windowCheck);


// #### view1
var view1 = {
	"name": "'POPUP view1'",
	"key": false
};
(function(o, obj) {
	result = (o.backgroundColor === "purple" && o.width === "70%" && o.top === "110dp" && o.height === "30");
	saveResult(o, obj, result);
})($.view1, view1);

// #### testLabel1
var testLabel1 = {
	"name": "'POPUP testLabel1'",
	"key": false
};
(function(o, obj) {
	result = (o.text === "Inline Purple bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.testLabel1, testLabel1);


// #### view2
var view2 = {
	"name": "'POPUP view2'",
	"key": false
};
(function(o, obj) {
	result = (o.backgroundColor === "purple" && o.width === "70%" && o.top === "110dp" && o.height === "30");
	saveResult(o, obj, result);
})($.view2, view2);

// #### testLabel2
var testLabel2 = {
	"name": "'POPUP testLabel2'",
	"key": false
};
(function(o, obj) {
	result = (o.text === "Inline Purple bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.testLabel2, testLabel2);


// #### testView
var testView = {
	"name": "'POPUP testView'",
	"key": false
};
(function(o, obj) {
	result = (o.backgroundColor === "purple" && o.width === "70%" && o.top === "110dp" && o.height === "30");
	saveResult(o, obj, result);
})($.testView, testView);

// #### label3
var label3 = {
	"name": "'POPUP label3'",
	"key": false
};
(function(o, obj) {
	result = (o.text === "Inline Purple bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.label3, label3);

// #### view3
var view3 = {
	"name": "'POPUP view3'",
	"key": false
};
(function(o, obj) {
	result = (o.backgroundColor === "purple" && o.width === "70%" && o.top === "110dp" && o.height === "30");
	saveResult(o, obj, result);
})($.view3, view3);

// #### testLabel4
var testLabel4 = {
	"name": "'POPUP testLabel4'",
	"key": false
};
(function(o, obj) {
	result = (o.text === "Inline Purple bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.testLabel4, testLabel4);


// #### aboutButton
var aboutButton = {
	"name": "'POPUP aboutButton'",
	"key": false
};
(function(o, obj) {
	result = (o.text === "Global generic bgColor BLUE" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true && o.bottom === "50");
	saveResult(o, obj, result);
})($.aboutButton, aboutButton);

// #### buttonCheck
var buttonCheck = {
	"name": "'POPUP buttonCheck'",
	"key": false
};
(function(o, obj) {
	result = (o.bottom === 5 && o.width === "SIZE" && o.horizontalWrap === true && o.title === "Click");
	saveResult(o, obj, result);
})($.button, buttonCheck);
buttonCheck, result);
result = null;


var propertyCheck = [windowCheck.key, view1.key, testLabel1.key, view2.key, testLabel2.key, testView.key, label3.key, view3.key, testLabel4.key, aboutButton.key, button.key ];
checkAndIncrement(propertyCheck);


setTimeout(function() {
	openModal();
}, 1000)