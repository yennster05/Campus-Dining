//Starting off with a black background as we plan to have the rows be a golden color
Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
/*The list of CBE clubs. Currently looking into an easy way to add a color to these rows other than manually adding it behind each
 entry. Might just do that anyways, if someone else comes up with an idea feel free to try it.*/
var tableData = [];
	tableData[0] = 'American Marketing Association (AMA)'; 
	tableData[1] = 'Beta Alpha Psi (BAP) and the Student Accounting Association (SAA)'; 
	tableData[2] = 'Distinguished Sophomore Business Club'; 
	tableData[3] = 'Economics Club';
	tableData[4] = 'Financial Management Association (FMA)';
	tableData[5] = 'Management Information Systems Association (MISA)';
	tableData[6] = 'PGA Golf Management Club';
	tableData[7] = 'Operation Management Club';
	tableData[8] = 'Human Resource Management Club';

var rowViewData = [];
function bindRowData (){
for (var i=0; i<tableData.length; i++) {
var rowView = Ti.UI.createTableViewRow({
	title: tableData[i],
	height:50,
	backgroundColor: '#B29600',
	cbeName: tableData[i]
});
rowViewData.push(rowView);
}
return rowViewData;
}
/*Simply put, adds the above data to the table. Haven't created the event listener yet that would make it interactive
 got distracted by the color thing*/
var table = Ti.UI.createTableView({
	heardTitle: 'Pick a club to learn more!',
	data: bindRowData()
});

function getInfo(cbe) {
	var indicator = cbe.charAt (1);
	var msg;
	switch (indicator) {
		case 'A': msg = 'A national organization for students, academics and professionals. Join as early as your freshman year to learn about marketing career opportunities. \n\nFaculty Advisor: Sanjay Sisodiya \nsisododiya@uidaho.edu'; break;
		case 'B': msg = 'A national scholastic and professional accounting fraternity. Any University of Idaho student can join the Student Accounting Association. Those who join BAP must be majoring in accounting, information systems, and finance, be in or have completed their first upper-division course in their major, have a 3.0 GPA or higher, and have minimum attendance requirements. SAA and BAP share the same meetings, which often include having professional speakers from nearby businesses. Their meetings may cover topics such as interview techniques, or the groups may engage in socials, fundraisers, and community service. \n\nFaculty Advisor: Jane Weiss \njmweiss@uidaho.edu'; break;
		case 'D': msg = 'A group that recognizes 3.7-4.0 GPA sophomores and junior transfers who are not ready to begin the Integrated Business Curriculum (IBC). Membership provides information about exciting opportunities that enhance one\'s career opportunities. \n\nFaculty Advisor: Daniel Borgia \ndborgia@uidaho.edu'; break;
		case 'E': msg = 'A great way to learn abut the major before you take more than the introductory economics classes required by all university majors, is to participate in Econ Club meetings throughout the year. The club also helps attract and present a variety of guest speakers practicing economics in a variety of careers.  \n\nFaculty Advisor: Steve Peterson \nstevenp@uidaho.edu'; break;
		case 'F': msg = 'A great way to learn about the major before you take any finance classes; participate in meetings throughout the semester. Guest speakers to talk about finance in the workplace. \n\nFaculty Advisor: Tom Liesz \ntliesz@uidaho.edu'; break;
		case 'M': msg = 'Find out about your major before you even take any Information Systems (IS) classes. Speakers visit regularly from businesses interested in hiring after graduation. Students take field trips to visit businesses in Spokane and Seattle. Become involved with Vandal cybercasting, a MISA activity. \n\nFaculty Advisor: Lori Baker-Eveleth \nleveleth@uidaho.edu'; break;
		case 'P': msg = 'A student organization for students in the PGA Golf Management Program. \n\nFaculty Advisor: Cole Mize \ncolem@uidaho.edu'; break;
		case 'O': msg = 'The Operation Management club is a good place to find out more about the major. The club is made up of students in the majors and anyone else interested in operations management. The club takes tours of area manufacturing operations, invites in guest speakers (particularly from companies that recruit POM majors), attends meetings of the American Production and Inventory Control Society (APICS - a professional society made up mostly of managers working in operations), and meets occasionally for social activities. All students are welcome to attend Operation Management club meetings. \n\nFaculty Advisor: John Lawrence \njjl@uidaho.edu'; break;
		case 'H': msg = 'A student chapter of the national Society for Human Resource Management (SHRM). There are approximately 350 student chapters found on various campuses nationwide. SHRM is a national processional organization of human resource practitioners, educators, and various professionals involved with human resources. \n\nFaculty Advisor: Jan Rauk \njrauk@uidaho.edu'; break;
	}
	return msg;
};

function showCBE (_args) {
	var cbeDisc = Ti.UI.createWindow({layout:'vertical'});
	
	cbeDisc.backgroundColor = 'B29600';
	cbeDisc.msg = getInfo(_args);
	var info = Ti.UI.createLabel
	({text:cbeDisc.msg, top:'65%'});
	var close = Ti.UI.createButton
	({title:'Pick another CBE', top:'25%'});
	close.addEventListener('click', function(e)
		{cbeDisc.close();
		cbeDisc = null;
		});
	cbeDisc.add(info);
	cbeDisc.add(close);
	cbeDisc.open();
}

table.addEventListener ('click', function(e)
{showCBE(e.source.cbeName);});
//Adds table to the window, then opens it
win.add(table);
win.open();
