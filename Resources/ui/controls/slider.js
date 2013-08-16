// Slider TableView Controller
function Slider(_args) {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		title:_args.title,
		containingTab:_args.containingTab
	});
	
	var tableView = Ti.UI.createTableView({
		data:[{title:'Basic', hasChild:true, test:'ui/controls/sliderBasic'},
			  {title:'Change Min/Max', hasChild:true}]
	});
	
	tableView.addEventListener('click',function(e) {
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
}

module.exports = Slider;
