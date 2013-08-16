
(function () {
	var ApplicationTabGroup = require('ui/ApplicationTabGroup');
	
	var tabGroup = new ApplicationTabGroup();
	
	tabGroup.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
}) ();
