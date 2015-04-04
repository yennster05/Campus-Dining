Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();

var tableData = [ 
	{title: 'American Marketing Association (AMA)'}, 
	{title: 'Beta Alpha Psi (BAP) and the Student Accounting Association (SAA)'}, 
	{title: 'Distinguished Sophomore Business Club'}, 
	{title: 'Economics Club'},
	{title: 'Financial Management Association (FMA)'},
	{title: 'Management Information Systems Association (MISA)'},
	{title: 'PGA Golf Management Club'},
	{title: 'Operation Management Club'},
	{title: 'Human Resource Management Club'} ];

var table = Ti.UI.createTableView({
	data: tableData
});

win.add(table);
win.open();
