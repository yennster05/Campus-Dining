var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'The Operation Management club is a good place to find out more about the major. The club is made up of students in the majors and anyone else interested in operations management. The club takes tours of area manufacturing operations, invites in guest speakers (particularly from companies that recruit POM majors), attends meetings of the American Production and Inventory Control Society (APICS - a professional society made up mostly of managers working in operations), and meets occasionally for social activities. All students are welcome to attend Operation Management club meetings. \n\nFaculty Advisor: John Lawrence\nEmail: jjl@uidaho.edu',
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