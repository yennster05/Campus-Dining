var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'A great way to learn abut the major before you take more than the introductory economics classes required by all university majors, is to participate in Econ Club meetings throughout the year. The club also helps attract and present a variety of guest speakers practicing economics in a variety of careers.  \n\nFaculty Advisor: Steve Peterson\nEmail: stevenp@uidaho.edu',
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