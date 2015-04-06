var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'Find out about your major before you even take any Information Systems (IS) classes. Speakers visit regularly from businesses interested in hiring after graduation. Students take field trips to visit businesses in Spokane and Seattle. Become involved with Vandal cybercasting, a MISA activity. \n\nFaculty Advisor: Lori Baker-Eveleth\nEmail: leveleth@uidaho.edu ',
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