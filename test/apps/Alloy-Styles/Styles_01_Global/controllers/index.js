function doClick(e) {  
    alert($.label.text);
}

setTimeout(function(){
	Ti.API.info('####' + $.mainWin.backgroundColor + '  ' + $.label.color);
	if ($.mainWin.backgroundColor=='yellow' && $.label.color=='black') {
		alert('Styles applied correctly!');
	}
	else {
		alert('Styles are Broken!')
	}
},400);
 
$.mainWin.open();