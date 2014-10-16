(function($, console, doc) {
	var storesListViewModel;
    	
    storesListViewModel = kendo.observable({ 
        stores : [], 
        load: function(data) { 
            var that = this;
            that.set("stores", data); 
        } 
    });
    
	$.extend(window, {
		
        storesListViewModel: storesListViewModel
	});
    
})(jQuery, console, document);