function closeModal(){
	$.modalWin.close()
};

var rigthNav = Ti.UI.createButton({
	title:'close'
});
rigthNav.addEventListener('click', closeModal);

$.modalWin.rightNavButton = rigthNav;
