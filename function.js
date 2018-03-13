$(document).ready(function(){
   
        $.getJSON("http://greenmunchies.tk/app712/traer.php", function(resultados){
            
			for(i = 0; i<resultados.length; i++){
				$.each(resultados[i], function(i, campo){
               	 	$("#listacom").append('<li style="list-style-type:none">' + campo + '</li></br>');
            	});
			} 
        });
		
		$.getJSON("http://greenmunchies.tk/app712/traerd.php", function(resultados){
			var f = 0;
			f++;
            
			for(k = 0; k<resultados.length; k++){
				$.each(resultados[k], function(k, com){
               	 	$("#vermas").append('<div class="esto"><a href="#debate1" onClick="info(' + f +')" id="'+ f +'">' + com + '</a></div></br>');
            	});
				
				f++;
				

				
			} 
        });
		

    });
	
	
  document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }


 function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    }

    // onError Callback receives a [PositionError](PositionError/positionError.html) object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }


	function info(x){
	$('#main').empty();

		
	var str = "http://greenmunchies.tk/app712/traerf.php?codigo=";
	var str2 = x;
	var todo = str.concat(str2);
			
	$.getJSON(todo, function (resultados){
		
			for(t = 0; t<resultados.length; t++){
				$.each(resultados[t], function(t, recetas){
               	 	$("#main").append('<li style="list-style-type:none">' + recetas + '</li></br>');
            	});
			} 
		

		
		
		});
		
	}
$('#formulario').submit(function() { 
	
	 "use strict";
	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#usuario").val();
	var datosComentario = $("#comentario").val();
	
  	var archivoValidacion = "http://greenmunchies.tk/app712/enviar.php?jsoncallback=?";
	
	$.getJSON(archivoValidacion, {usuario:datosUsuario ,comentario:datosComentario})
	.done(function(respuestaServer) {

	$('#listacom').empty();
	$.getJSON("http://greenmunchies.tk/app712/traer.php", function(resultados){
            
			for(i = 0; i<resultados.length; i++){
				$.each(resultados[i], function(i, campo){
               	 	$("#listacom").append('<li style="list-style-type:none">' + campo + '</li></br>');
            	});
			} 
        });

				
		if(respuestaServer.validacion == "ok"){
		  
		
			$.mobile.changePage("#home");
$('#formulario')[0].reset();

			
					  
		}else{
		  
		  /// ejecutar una conducta cuando la validacion falla
		}
  
	});
	return false;
});


    $('#foorm').submit(function() {
        // recolecta los valores que inserto el usuario
		"use strict";
        var datosTitulo = $("#titulo").val();
        var datosNombre = $("#nombre").val();
        var datosCuerpo = $('#cuerpo').val();
        
        var archivoValidacion = "http://greenmunchies.tk/app712/enviar3.php?jsoncallback=?";

        $.getJSON( archivoValidacion, { titulo:datosTitulo ,  nombre:datosNombre, cuerpo:datosCuerpo}).done(function(respuestaServer) {
			
			$('#vermas').empty();
	$.getJSON("http://greenmunchies.tk/app712/traerd.php", function(resultados){
			var f = 0;
			f++;
            
			for(k = 0; k<resultados.length; k++){
				$.each(resultados[k], function(k, com){
               	 	$("#vermas").append('<div class="esto"><a href="#debate1" onClick="info(' + f +')" id="'+ f +'">' + com + '</a></div></br>');
            	});
				
				f++;
				

				
			} 
        });

            
          //  alert(respuestaServer.mensaje);

            if(respuestaServer.validacion == "ok"){
                $.mobile.changePage("#home");
				
				$('#foorm')[0].reset();
            }else{
                alert(respuestaServer.mensaje);
            }
        });
        return false;
    });
	
