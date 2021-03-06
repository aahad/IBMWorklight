function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}

function onSuccess(imageData) {
	 
	var smallImage = document.getElementById('ImgPlaceholder'); 
	smallImage.style.display = 'block';
	smallImage.src = imageData;
	 
}

function onFail(message) {
	alert('Failed because: ' + message);
}	

//Use from Camera
$("#takePictureBtn").on("touchend", function() {
	 
	navigator.camera.getPicture(onSuccess, onFail, { 
		quality: 50,
		sourceType: Camera.PictureSourceType.CAMERA,
		destinationType: Camera.DestinationType.FILE_URI
	});

});

//Use from Library
$("#openGalleryBtn").on("touchend", function() {
	 
	navigator.camera.getPicture(onSuccess, onFail, { 
		quality: 50,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		destinationType: Camera.DestinationType.FILE_URI
	});

});