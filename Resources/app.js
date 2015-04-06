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
//creating an empty array to store the rows in
var rowViewData = [];
//this function is binding the rows together with the background color. Attempting to add a custom trait of 'cbeName' to each row (Matches the title data atm)
function bindRowData (){
for (var i=0; i<tableData.length; i++) {
var rowView = Ti.UI.createTableViewRow({
	title: tableData[i],
	height:50,
	backgroundColor: '#B29600',
	cbeTag: i
});
//Pushing the row data into the finished array
rowViewData.push(rowView);
}
return rowViewData;
}
/*Simply put, adds the above data to the table. */
var table = Ti.UI.createTableView({
	headTitle: 'Pick a club to learn more!',
	data: bindRowData()
});
//this is for finding the file containing the CBE window and information
function getTag(cbe) {
	var indicator = cbe + 1;
	var msg;
	switch (indicator) {
		case 1: msg = 'ama.js'; break;
		case 2: msg = 'bap.js'; break;
		case 3: msg = 'dsbc.js'; break;
		case 4: msg = 'ec.js'; break;
		case 5: msg = 'fma.js'; break;
		case 6: msg = 'misa.js'; break;
		case 7: msg = 'pga.js'; break;
		case 8: msg = 'omc.js'; break;
		case 9: msg = 'hrmc.js'; break;
	}
	return msg;
};
/*This creates a window to display the information from the above switch. Currently, it's broken and I don't know why. 
 Suspicion is the switch isn't doing what it should be doing, but I don't know why that is*/
/*function showCBE (_args) {
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
}*/
//takes the custom data from the table (matching the label titles) and passes it through the two functions above.
table.addEventListener ('click', function(e)
{
	var newWin = Ti.UI.createWindow({
		url: getTag(e.source.cbeTag),
		backgroundColor: '#B29600'
	});
	newWin.open();
});
//Adds table to the window, then opens it
win.add(table);
win.open();
