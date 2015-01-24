var controls = require('controls');

var labelCheck = {
		"name" : "'labelCheck'",
		"key" : false
	};


$.index.open();


if (OS_IOS){
	alert('iOS!');
	Ti.API.info('ios');

//labelCheck_iOS
	
	(function(o, check) {
			controls.getProp(o, check);
			if (o.color==="yellow" && o.font.fontSize==="24dp" && o.text==="you are on iOS - if you've seen the Alert it's working fine") {
				Ti.API.info("#### " + check.name + " is true");
				check.key = true;
			} else {
				Ti.API.info(check.name + " failed");
				Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
			}
			o, check = null;
		})($.label1, labelCheck);

		var propertyCheck = [labelCheck.key];
		controls.checkAndIncrement(propertyCheck);

}

else if (OS_ANDROID){
	alert('Android!');
	Ti.API.info('android');


//labelCheck_android
	(function(o, check) {
			controls.getProp(o, check);
			if (o.color==="yellow" && o.font.fontSize==="24dp" && o.text==="you are on Android - if you've seen the Alert it's working fine") {
				Ti.API.info("#### " + check.name + " is true");
				check.key = true;
			} else {
				Ti.API.info(check.name + " failed");
				Ti.API.info("#### Object" + check.name + ", false, is: " + JSON.stringify(o));
			}
			o, check = null;
		})($.label1, labelCheck);

		var propertyCheck = [labelCheck.key];
		controls.checkAndIncrement(propertyCheck);
}

else if (OS_MOBILEWEB){
	alert('MobileWeb!');
	Ti.API.info('mpobileweb');
}

else if (OS_BLACKBERRY){
	alert('BlackBerry!');
	Ti.API.info('bb');
}

else if (OS_TIZEN){
	alert('Tizen!');
	Ti.API.info('tizen');
}

else {
	alert('I know nothing of this platform... :(')
	Ti.API.info('nothing!');
}

