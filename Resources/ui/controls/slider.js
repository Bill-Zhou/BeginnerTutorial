// Slider TableView Controller
function Slider(_args) {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		title:'Slider',
		navBarHidden:false
	});
	
	var tableView = Ti.UI.createTableView({
		data:[{title:'Basic', hasChild:true},
			  {title:'Change Min/Max', hasChild:true}]
	});
	
	self.add(tableView);
	
	return self;
}

module.exports = Slider;
