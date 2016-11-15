<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
                        
	$('#taptext').on("tap",function(){
		result = random();
		if(result == true){
			alert("I am " + result);	
		}
		else 
		if(result == false){
			alert("I am " + result);
		}
		
 	}); 

	function random() {
		return !Math.round(Math.random)
	}
	
});