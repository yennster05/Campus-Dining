var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'A student organization for students in the PGA Golf Management Program. \n\nFaculty Advisor: Cole Mize\nEmail: colem@uidaho.edu',
	top: '25%'
});
var button = Ti.UI.createButton ({
	title: 'Pick another CBE',
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