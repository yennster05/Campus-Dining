//Starting off with a black background as we plan to have the rows be a golden color
Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
	image: 'Vandal.jpg',
	top: 0,
	height: '20%',
	width: '40%'
});
/*The list of CBE clubs. Currently looking into an easy way to add a color to these rows other than manually adding it behind each
 entry. Might just do that anyways, if someone else comes up with an idea feel free to try it.*/
var tableData = [];
	tableData[0] = "Bob's Place"; 
	tableData[1] = "Bogey's Grill"; 
	tableData[2] = 'Cobrizo Mexican Grill'; 
	tableData[3] = "Denny's All Nighter";
	tableData[4] = "Einstein's Bagels";
	tableData[5] = 'Jamba Juice';
	tableData[6] = 'Paradise Creek Pizza';
	tableData[7] = 'Stovers';
	tableData[8] = 'Traders Market';
//creating an empty array to store the rows in
var rowViewData = [];
//this function is binding the rows together with the background color. Custom Trait of cbeTag to keep track of each entry
function bindRowData (){
for (var i=0; i<tableData.length; i++) {
var rowView = Ti.UI.createTableViewRow({
	title: tableData[i],
	height:50,
	backgroundColor: "#B18E5F",
	color: "#000000",
	CampusDiningTag: i
});
//Pushing the row data into the finished array
rowViewData.push(rowView);
}
return rowViewData;
}
/*Simply put, adds the above data to the table. */
var table = Ti.UI.createTableView({
	headerTitle: 'Vandal Dining Options',
	data: bindRowData(),
	top: '20%'
});
//this is for finding the file containing the CBE window and information
function getTag(CampusDining) {
	var indicator = CampusDining + 1;
	var msg;
	switch (indicator) {
		case 1: msg = 'bob.js'; break;
		case 2: msg = 'bog.js'; break;
		case 3: msg = 'cob.js'; break;
		case 4: msg = 'denny.js'; break;
		case 5: msg = 'ein.js'; break;
		case 6: msg = 'jamba.js'; break;
		case 7: msg = 'pcp.js'; break;
		case 8: msg = 'stov.js'; break;
		case 9: msg = 'trade.js'; break;
	}
	return msg;
};
// * * * * * * THIS HAS BEEN REMOVED AND NO LONGER IN USE. CODE LEFT FOR REFERENCE ONLY * * * * * *
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

//takes the reference data from the table and uses it to determine the file name to open
table.addEventListener ('click', function(e)
{
	var newWin = Ti.UI.createWindow({
		url: getTag(e.source.CampusDiningTag),
		backgroundColor: '#B18E5F'
	});
	newWin.open();
});
//Adds table to the window, then opens it
win.add(image);
win.add(table);
win.open();
