<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
                        
	$('#taptext').on("tap",function(){
		result = random();
		if(result == true){
			alert("I am " + result);	
			navigator.notification.beep(2);
		}
		else if(result == false){
			alert("I am " + result);
			navigator.vibrate(20000);
		}
		
 	}); 

	function random() {
		return !Math.round(Math.random());
	}
	
});