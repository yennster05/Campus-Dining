Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
	image: 'Bogeys.jpg',
	top: 0,
	height: '30%',
	width: '100%'
});

var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: "Info: Want a place to escape? Visit Bogey’s Grill located at the University of Idaho Golf Course. Enjoy a juicy delicious burger and crispy fries while relaxing on our patio which has theone of the best views of the Palouse. For the golfer on the move Bogey’s offers a great Vandal Sausage and grab-n-go items that will surely satisfy the heartiest appetites. If you are looking for just a snack and beverage check out our large selection of Pepsi products. You’ll find a warm welcome at Bogey’s Grill and we promise that your experience here will be unforgettable.",
	top: '35%',
	width: '90%',
	color: '#000000'
});


var bb1 = Titanium.UI.createButtonBar({
	labels:['One','Two','Three'],
	backgroundColor:'#336699',
	top:50,
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	height:25,
	width:200
});
//masterVw.add(button);
//masterVw.add(label);
//win1.add(masterVw);
win1.add(label);
win1.open();
win1.add(image);
win1.add(bb1);
