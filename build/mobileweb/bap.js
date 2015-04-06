var win1 = Titanium.UI.currentWindow;

//var masterVw = Ti.UI.createView ({layout: 'vertical'});

var label = Ti.UI.createLabel ({
	text: 'A national scholastic and professional accounting fraternity. Any University of Idaho student can join the Student Accounting Association. Those who join BAP must be majoring in accounting, information systems, and finance, be in or have completed their first upper-division course in their major, have a 3.0 GPA or higher, and have minimum attendance requirements. SAA and BAP share the same meetings, which often include having professional speakers from nearby businesses. Their meetings may cover topics such as interview techniques, or the groups may engage in socials, fundraisers, and community service. \n\nFaculty Advisor: Jane Weiss\nEmail: jmweiss@uidaho.edu',
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