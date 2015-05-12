Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
	image: 'denny.jpg',
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
	text: "Location: 6th Street Marketplace\n\nInfo: Denny's AllNighter, a new concept to college campuses was opened on campus in the fall of 2010, the first in the country. Featuring a vibrant and exciting menu, Seattle’s Best coffee, espresso, and of course your Denny’s favorites.\n\nHours of Operation:\nSunday - Thursday: 9am - Midnight\nFriday - Saturday: 10am - 2am",
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '30%',
	width: '90%',
	color: '#000000'
});

var label2 = Ti.UI.createLabel ({
	text: "Original Grand Slam: $5.99\nThe Grand Slamwich: $6.79\nTexas Prime Rib and Egg Sandwich: $6.99\nChipotle Prime Rib Breakfast Burrito: $6.99\nVeggie Fajita Breakfast Burrito: $5.79\n\nGuacamole Chicken Burrito: $6.99\nPrime Rib Burrito: $6.99\nVeggie Mash Up Burrito: $5.79\nGrilled Chicken Panini: $6.49\nPrime Rib Cheese Steak: $6.99\nBacon Ranch Chicken Salad Sandwich: $5.79\n\nSouthwestern Chicken Salad: $5.99\nPecan Cranberry Chicken Salad: $5.99\nYogurt Parfait: $3.59\nFruit Cup: $2.99",
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '30%',
	width: '90%',
	color: '#000000'
});

var image2 = Ti.UI.createImageView({
	image: 'denny.jpg',
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


