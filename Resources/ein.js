Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
	image: 'ein.jpg',
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
	text: 'Location: University of Idaho Commons\n\nInfo: Einstein offers an enticing variety of coffee, espresso, fresh baked bagels, salads, sandwiches and much more.\n\nHours of Operation: Monday - Friday: 7am - 6pm\nSaturday - Sunday: Closed',
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '35%',
	width: '90%',
	color: '#000000'
});

var label2 = Ti.UI.createLabel ({
	text: 'Egg Sandwiches:\nHam and Cheese: $5.99\nSpinach and Cheese: $5.29\nBacon and Cheese: $5.99\n\nEgg Wraps:\nSanta Fe Egg: $6.29\nEgg/Sausage: $5.99\n\nPlain Bagels:\nCream Cheese: $2.79\nHummus: $2.79\n\nSignature Coffee:\nVanilla Hazelnut Latte: $4.19\nWhite Chocolate Mocha: $4.19\nCaramel Macchiato: $4.19\nHazelnut Mocha: $4.19',
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '35%',
	width: '90%',
	color: '#000000'
});

var image2 = Ti.UI.createImageView({
	image: 'ein.jpg',
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
