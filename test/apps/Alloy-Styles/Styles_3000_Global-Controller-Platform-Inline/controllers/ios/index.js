var result = null;
var checkAndIncrement = require('controls').checkAndIncrement;
var saveResult = require('controls').saveResult;

$.button.addEventListener('click', function() {
	Alloy.createController('popup').getView().open();
});

$.index.open();

Ti.API.info("#### Styles_2500_Global-Controller-Platform-Themes-Inline_advanced");
Ti.API.info('#### INDEX window - checking compiled code');

// #### winCheck
var windowCheck = {
	"name" : "'index windowCheck'",
	"key" : false
};
(function(o, obj) {
	result = (o.backgroundColor === "blue" && o.fullscreen === false);
	saveResult(o, obj, result);
})($.index, windowCheck);

// #### view1Check
var view1Check = {
	"name" : "'index view1Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.top === "5dp" && o.backgroundColor === "red" && o.width === "70%" && o.height === "30");
	saveResult(o, obj, result);
})($.view1, view1Check);

// #### label1Check
var label1Check = {
	"name" : "'index label1Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.text === "Global Markup RED bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.label1, label1Check);

// #### view2Check
var view2Check = {
	"name" : "'index view2Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.top === "40dp" && o.width === "70%" && o.height === "30" && o.backgroundColor === "orange" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.view2, view2Check);

// #### label2Check
var label2Check = {
	"name" : "'index label2Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.text === "Global Class Orange bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.label2, label2Check);

// #### view3Check
var view3Check = {
	"name" : "'index view3Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.top === "75dp" && o.backgroundColor === "brown" && o.width === "70%" && o.height === "30");
	saveResult(o, obj, result);
})($.view3, view3Check);

// #### label3Check
var label3Check = {
	"name" : "'index label3Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.text === "Global ID Brown bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.label3, label3Check);

// #### view4Check
var view4Check = {
	"name" : "'index view4Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.backgroundColor === "purple" && o.width === "70%" && o.top === "110dp" && o.height === "30");
	saveResult(o, obj, result);
})($.view4, view4Check);

// #### label4Check
var label4Check = {
	"name" : "'index label4Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.text === "Inline Purple bgColor" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true);
	saveResult(o, obj, result);
})($.label4, label4Check);

// #### label5Check
var label5Check = {
	"name" : "'index label5Check'",
	"key" : false
};
(function(o, obj) {
	result = (o.text === "Global generic bgColor BLUE" && o.font.fontSize === "15dp" && o.color === "#000" && o.height === "SIZE" && o.width === "SIZE" && o.horizontalWrap === true && o.bottom === "50");
	saveResult(o, obj, result);
})($.label5, label5Check);

// #### buttonCheck
var buttonCheck = {
	"name" : "'index buttonCheck'",
	"key" : false
};
(function(o, obj) {
	result = (o.bottom === 5 && o.width === "SIZE" && o.horizontalWrap === true && o.title === "Click");
	saveResult(o, obj, result);
})($.button, buttonCheck);

// Array including the checks to be performed
var propertyCheck = [windowCheck.key, view1Check.key, label1Check.key, view2Check.key, label2Check.key, view3Check.key, label3Check.key, view4Check.key, label4Check.key, label5Check.key, buttonCheck.key];
checkAndIncrement(propertyCheck);

// opening popup window
setTimeout(function() {
  Alloy.createController('popup').getView().open();
}, 1000);