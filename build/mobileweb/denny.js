var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: "Info: Denny's AllNighter, a new concept to college campuses was opened on campus in the fall of 2010, the first in the country. Featuring a vibrant and exciting menu, Seattle’s Best coffee, espresso, and of course your Denny’s favorites.",
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