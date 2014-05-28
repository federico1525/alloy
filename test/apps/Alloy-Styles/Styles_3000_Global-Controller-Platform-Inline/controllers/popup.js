function close(){
	$.popup.close();
}

function openModal(){
	Alloy.createController("modal").getView('modalWin').open()
};
