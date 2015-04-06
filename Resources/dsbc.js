var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'A group that recognizes 3.7-4.0 GPA sophomores and junior transfers who are not ready to begin the Integrated Business Curriculum (IBC). Membership provides information about exciting opportunities that enhance one\'s career opportunities. \n\nFaculty Advisor: Daniel Borgia\nEmail: dborgia@uidaho.edu',
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