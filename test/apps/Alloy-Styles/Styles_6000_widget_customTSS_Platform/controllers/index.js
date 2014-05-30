var rows = [];
var titles = ["Lord of the Rings", "Harry Potter", "Eragon", "Wheel of Time", "Narnia"];

for(var i=0,j=titles.length;i<j;i++) {
	rows.push(Alloy.createController('row', { title: titles[i]}).getView());
}
$.table.data = rows;




$.index.open();

alert(Alloy.Globals.custom1 + '  ' + Alloy.Globals.custom2);