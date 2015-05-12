Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
	image: 'pcp.png',
	top: 0,
	height: '30%',
	width: '100%'
});

var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});
var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
	title:'Info',
	backgroundColor:'#B18E5F'
});
var tab1 = Titanium.UI.createTab({
	icon:'Home.png',
	title:'Info',
	window:win1
	
});
var win2 = Titanium.UI.createWindow({
	title:'Menu',
	backgroundColor:'#B18E5F'
});
var tab2 = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'Menu',
	window:win2
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

var label = Ti.UI.createLabel ({
	text: 'Location: University of Idaho Commons\n\nInfo: Enjoy pizza, pasta and other hot entrees.\n\nHours of Operation:\nMonday - Friday: 10am - 3pm',
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '35%',
	width: '90%',
	color: '#000000'
});

var label2 = Ti.UI.createLabel ({
	text: 'Pizza:\nPepperoni\nSausage\nCheese\n\nPasta:\nMarinara\nPesto\nFettuccini\n\nSalads:\nChicken Ceasar\nCobb\nSouthwestern Chicken',
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '35%',
	width: '90%',
	color: '#000000'
});

var image2 = Ti.UI.createImageView({
	image: 'pcp.png',
	top: 0,
	height: '30%',
	width: '100%'
});

//masterVw.add(button);
//masterVw.add(label);
//win1.add(masterVw);
win1.add(label);
win1.open();
win1.add(image);
tabGroup.open();
win2.add(label2);
win2.add(image2);
