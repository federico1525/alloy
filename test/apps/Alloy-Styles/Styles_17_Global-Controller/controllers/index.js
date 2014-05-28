function doClick(e) {  
    alert($.label.text);
}

if (!OS_MOBILEWEB){
	Ti.API.info('#### ' + JSON.stringify($.label));
}
 
$.index.open();