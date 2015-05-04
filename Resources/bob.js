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

var win = Ti.UI.createWindow({
	title:'Menu',
	backgroundColor:'#fff'
});
	
var tab1 = Titanium.UI.createTab({
	icon: 'tab1icon.png',
	title: 'Menu',
	window:win1
});

tabGroup.addTab(tab1);

tab1.addEventListener('click', function(e){
	win1.close();
	win1 = null;
});
	

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: "Info: Bob's Place is the main dining hall on the University of Idaho Campus. Bob's Place offers meals from morning until night, with an all-you-care-to-eat format. We serve Aspretto coffee and offer a wide range of options, from classic comfort foods to freshly sauteed international offerings. All ages are welcome and you do not need to be a student to eat at Bob's Place.",
		top: '35%',
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
