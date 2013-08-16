//Controls Window with table view
function ControlsWindow () {	
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		title:'Controls'
	});
	
	var tableView = Ti.UI.createTableView({
		style:Ti.UI.iPhone.TableViewStyle.GROUPED
	});

	var data = [{title:'Slider', hasChild:true, test:'ui/controls/slider'}];
	
	tableView.setData(data);
	
	tableView.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({
					title: e.rowData.title,
					containingTab: self.containingTab
				});
			self.containingTab.open(win);
		}
	});
	
	self.add(tableView);
		
	return self;
};

module.exports = ControlsWindow;
