Ti.UI.backgroundColor = 'Black';

var image = Ti.UI.createImageView({
	image: 'Bobs.jpg',
	top: 0,
	height: '30%',
	width: '100%'
});

var win1 = Titanium.UI.currentWindow;
	backgroundColor: "B18E5F";
	
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

var label2 = Ti.UI.createLabel ({
	text: "Monday 5/3/15\n\nBreakfast:\nEntre: Omlet Bar\nScrambled Eggs\nHash Brown Potatoe\nFrench Waffle\n\nLunch:\nGrill: Chicken Sandwich\nHamburger\nVeggie Burger\n\nDinner:\nPasta: Chicken Pesto\nMarinara\nFettuccine\n\nPizza",
	font:{fontSize:12,fontFamily:'Calibri'},
	top: '35%',
	width: '90%',
	color: '#000000',
	window:win2
});

var image2 = Ti.UI.createImageView({
	image: 'Bobs.jpg',
	top: 0,
	height: '30%',
	width: '100%'
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: "Location: Wallace Complex Basement\n\nInfo: Bob's Place is the main dining hall on the University of Idaho Campus. Bob's Place offers meals from morning until night, with an all-you-care-to-eat format. We serve Aspretto coffee and offer a wide range of options, from classic comfort foods to freshly sauteed international offerings. All ages are welcome!\n\nHours of Operation\nMonday - Friday\nBreakfast: 7:30am - 10:30am\nLunch: 11am - 1:30pm\nDinner: 5pm - 7:30pm\n\nSaturday - Sunday\nBreakfast: Limited Continental Breakfast 8am - 10am\nLunch: 10am - 1:30pm\nDinner: 4:30pm - 7:30pm",
		font:{fontSize:12,fontFamily:'Calibri'},
		top: '30%',
		width: '90%',
		color: '#000000'
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
