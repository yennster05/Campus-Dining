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
	backgroundColor: '#B29600'
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
//Adds table to the window, then opens it
win.add(table);
win.open();
