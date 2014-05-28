function close(){
	$.popup.close();
}

function showButtonWidth(e){
	if (OS_MOBILEWEB){
		alert('Button is ' + $.button.width);
	}
	else{
		alert('Button width is: ' + e.source.width);
	}
}
