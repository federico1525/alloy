if (OS_IOS){
	alert('iOS!');
	Ti.API.info('ios');
}

else if (OS_ANDROID){
	alert('Android!');
	Ti.API.info('android');
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

$.index.open();
