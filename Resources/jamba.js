var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'Info: These blended-to-order masterpieces practically invented smoothies. All of your favorites are in the mix: real whole fruit, 100% fruit juice, sherbet, and frozen yogurt, plus nutritional boosts. Come in for a refreshing treat that’s always served in a fun and uplifting environment!',
	top: '25%'
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