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

<?xml version="1.0" encoding="UTF-8"?>
<projectDescription>
	<name>Hackahon4</name>
	<comment></comment>
	<projects>
	</projects>
	<buildSpec>
		<buildCommand>
			<name>com.appcelerator.titanium.core.builder</name>
			<arguments>
			</arguments>
		</buildCommand>
	</buildSpec>
	<natures>
		<nature>com.appcelerator.titanium.mobile.nature</nature>
	</natures>
</projectDescription>