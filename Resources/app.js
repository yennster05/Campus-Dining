var tabGroup = Titanium.UI.createTabGroup();

var winSettings = Ti.UI.createWindow({
});

var tabSettings = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'Settings',
	window:winSettings
});

var tableView = Ti.UI.createTableView({
	//style: Ti.UI.iphone.TableViewStyle.GROUPED,
	scrollable: true
});

var firstSection = Ti.UI.createTableViewSction({
	headerTitle:'First',
	footerTitle:'Lots of contectual information'
});

function setupSettings(){
	var view = Ti.UI.createView({});
	return view;
}


winSettings.add(setupSettings());
tabGroup.addTab(tabSettings);

tabGroup.open();
