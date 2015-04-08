var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: "Info: Want a place to escape? Visit Bogey’s Grill located at the University of Idaho Golf Course. Enjoy a juicy delicious burger and crispy fries while relaxing on our patio which has theone of the best views of the Palouse. For the golfer on the move Bogey’s offers a great Vandal Sausage and grab-n-go items that will surely satisfy the heartiest appetites. If you are looking for just a snack and beverage check out our large selection of Pepsi products. You’ll find a warm welcome at Bogey’s Grill and we promise that your experience here will be unforgettable.",
	top: '25%'
});
var button = Ti.UI.createButton ({
	title: 'View More Dining',
	top: '65%'
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