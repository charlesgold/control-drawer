var drawer = {
	version: '1.0.0'
	,appInit: function(){
		this.runApp();
	}
	,runApp: function(){
		var _this = this;
		//open one?
		if(this.settings.openState!=0){
			this.drawerAction(this.settings.openState);
		}
		$(document).ready(function(){
			$(_this.settings.handleClass).on('click', function(){
				_this.handleOpen($(this));
			});			
		});
		
	}
	,handleOpen: function(that){
		var assDrawer = that.attr('data-drawer');		
		console.log(assDrawer);
		this.drawerAction(assDrawer);
	}
	,drawerAction: function(drawerId){
		var _this = this;
		$('#'+drawerId).toggleClass(_this.settings.openClass);
		console.log(drawerId+ ' toggle class '+_this.settings.openClass);
	}
};

drawer.settings				= {};
drawer.settings.handleClass	=	'.drawer-handle';
drawer.settings.drawerClass	=	'.drawer-inside';
drawer.settings.openClass	=	'open-drawer';
drawer.settings.openState	=	'reviews-drawer';
drawer.appInit();