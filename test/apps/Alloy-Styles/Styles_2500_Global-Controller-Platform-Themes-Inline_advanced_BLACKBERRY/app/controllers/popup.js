setTimeout(function(){
	$.aboutButton.text += ' ' + $.button.width;
	Ti.API.info($.button.width);
},400);

function close(){
	$.popup.close();
}

function openModal(){
	Alloy.createController("modal").getView('modalWin').open()
};
