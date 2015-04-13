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

var label = Ti.UI.createLabel ({
	text: 'Info: Einstein offers an enticing variety of coffee, espresso, fresh baked bagels, salads, sandwiches and much more.',
	top: '35%',
	width: '90%',
	color: '#000000'
});
var button = Ti.UI.createButton ({
	title: 'View More Dining',
	top: '90%'
});

button.addEventListener('click', function(e){
	win1.close();
	win1 = null;
});

//masterVw.add(button);
//masterVw.add(label);
//win1.add(masterVw);
win1.add(label);
win1.add(button);
win1.open();
win1.add(image);
