function SliderBasic(_args) {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		title:_args.title
	});
	
	
	//Basic SLider
	var basicSliderLabel = Ti.UI.createLabel({
		top:10,
		width:300,
		height:'auto',
		textAlign:'center',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:15
		},
		color:'#999',
		text:'Basic Slider - Value = 0'
	});
	
	var basicSlider = Ti.UI.createSlider({
		width:100,
		top:30,
		min:0,
		max:10,
		value:'0',
		highlightedThumbImage:'/images/chat.png'
	});
	
	basicSlider.addEventListener('change', function(e) {
		basicSliderLabel.text = 'Basic Slider - Value = '+Math.round(e.value);
	});

	//Custom Slider
	var customSliderLabel = Ti.UI.createLabel({
		top:70,
		width:300,
		height:'auto',
		textAlign:'center',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:15
		},
		color:'#999',
		text:'Custom Slider - Value = 25'
	});
	
	var customSlider = Ti.UI.createSlider({
		width:268,
		top:90,
		height:11,
		min:0,
		max:100,
		value:'25',
		thumbImage:'/images/slider_thumb.png',
		leftTrackImage:'/images/slider_orangebar.png',
		rightTrackImage:'/images/slider_lightbar.png'
	});
	
	customSlider.addEventListener('change', function(e) {
		customSliderLabel.text = 'Custom Slider - Value = '+Math.round(e.value);		
	});
	
	self.add(basicSlider);
	self.add(basicSliderLabel);
	self.add(customSlider);
	self.add(customSliderLabel);


	//Buttons
	var width = 180;
	var gap = 50;
	var top = 130;
	
	//Hide/Show SLider
	var hideShowButton = Ti.UI.createButton({
		title:'Hide/Show Slider',
		top:top,
		width:width,
		height:'auto'
	});
	
	hideShowButton.addEventListener('click', function() {
		if (basicSlider.visible) {
			basicSlider.hide();
			customSlider.hide();
		}
		else {
			basicSlider.show();
			customSlider.show();
		}
	});

	self.add(hideShowButton);
		
	// Toggle Slider in NavBar
	navBarSliderButton = Ti.UI.createButton({
		title:'Toggle Slider in NavBar',
		top:top+gap,
		width:width,
		height:'auto'
	});
	
	navBarSlider = Ti.UI.createSlider({
		width:100,
		min:0,
		max:10,
		value:'5'
	});
	
	var inNavBar = false;	
	navBarSliderButton.addEventListener('click', function() {
		if (!inNavBar) {
			self.setRightNavButton(navBarSlider);
			inNavBar = true;
		}
		else {
			self.rightNavButton = null;
			inNavBar = false;	
		}
	});
	
	self.add(navBarSliderButton);
	
	// Toggle Slider in Title
	var titleSlider = Ti.UI.createSlider({
		min:0,
		max:10,
		value:'5',
		width:70
	});
	
	var titleSliderButton = Ti.UI.createButton({
		top:top+2*gap,
		width:width,
		height:'auto',
		title:'Toggle Slider in Title'
	});
	
	titleSliderButton.addEventListener('click', function() {
		if (self.titleControl) {
			self.titleControl = null;
			self.title = 'Slider';
		}
		else {
			self.setTitleControl(titleSlider);
		}
	});
	
	self.add(titleSliderButton);
	
	//Toggle Slider in Tool Bar
	var toolBarButton = Ti.UI.createButton({
		title:'Toggle Slider in Tool Bar',
		top:top+3*gap,
		width:width,
		height:'auto'
	});
	
	var toolBarSlider = Ti.UI.createSlider({
		width:100,
		min:0,
		max:10,
		value:'5'
	});
	
	var inToolbar = false;
	toolBarButton.addEventListener('click', function() {
		if (inToolbar) { 
			self.setToolbar(null,{animated:true});
			inToolbar = false;
		}
		else {
			self.setToolbar([toolBarSlider], {animated:true});
			inToolbar = true;
		}
	});
	
	self.add(toolBarButton);
	
	return self;
};

module.exports = SliderBasic;
