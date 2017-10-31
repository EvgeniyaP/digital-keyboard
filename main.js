$(document).ready(function() {
	$(".btn").click(function(e) {
		var btn = $(this),
			entryField = $("#entry_field");

		// check the number of characters to be entered in input by mouse click
        	if(entryField.val().length > 3) {
            	return entryField.val();           
       		};

        
		// check the number of characters to be entered in input by keyboard
		$("#entry_field").keyup(function() {
        	
        	if(entryField.val().length > 4) {
        		return entryField.val();           
       		};
    	});
        	
	 	entryField.val(entryField.val() + btn.val());    
	});
});


	// cancel the last entering number
	$(".btnControl01").click(function() {
		var entryField = $("#entry_field").val(),
			cancelNum = entryField.substr(0, (entryField.length - 1));
		$("#entry_field").val(cancelNum);
	}); 


	// remove the entering numbers from the screen
	$(".btnControl02").click(function() {
		$("#entry_field").val("");
	});

	
	// show the entering result in alert window
	$(".btnControl03").click(function() {
		alert($("#entry_field").val());
	});





	
	