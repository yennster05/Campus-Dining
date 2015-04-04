//Starting off with a black background as we plan to have the rows be a golden color
Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
/*The list of CBE clubs. Currently looking into an easy way to add a color to these rows other than manually adding it behind each
 entry. Might just do that anyways, if someone else comes up with an idea feel free to try it.*/
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
/*Simply put, adds the above data to the table. Haven't created the event listener yet that would make it interactive
 got distracted by the color thing*/
var table = Ti.UI.createTableView({
	heardTitle: 'Pick a club to learn more!',
	data: tableData
});
//Adds table to the window, then opens it
win.add(table);
win.open();
