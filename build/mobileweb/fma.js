var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'A great way to learn about the major before you take any finance classes; participate in meetings throughout the semester. Guest speakers to talk about finance in the workplace. \n\nFaculty Advisor, Tom Liesz\nEmail: tliesz@uidaho.edu',
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