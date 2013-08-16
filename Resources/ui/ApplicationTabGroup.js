//Application TabGroup

function ApplicationTabGroup() {
	var self = Ti.UI.createTabGroup();
	
	var ControlsWindow = require('ui/ControlsWindow');
	
	var controlsWin = new ControlsWindow();
	
	var controlsTab = Ti.UI.createTab({
		icon:'/images/tabs/KS_nav_views.png',
		title:'Controls',
		window: controlsWin
	});
	controlsWin.containingTab = controlsTab;
	self.addTab(controlsTab);
	
	return self;
};

module.exports = ApplicationTabGroup;
