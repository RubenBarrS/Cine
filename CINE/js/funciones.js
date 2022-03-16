function validar()
{
	var obj_input = document.getElementById("titulo");
	var input =obj_input.value;
	if (input.length < 4) {
		alert("Tiene menos de 4 caracteres");
	}
}

function cargarArray()
{

	var array = ["fantastico","historico","documental"];
	var obj_select = document.getElementsByTagName('select')[0];


	for (i=0 ; i<array.length; i++){
		var obj_option = document.createElement('option');

		obj_option.innerHTML=array[i];
		obj_option.value = array[i];
		obj_select.appendChild(obj_option);
	}


}


function comprobar()
{

	var obj_input=document.getElementById("titulo").value;
	var obj_select = document.getElementsByTagName('select')[0].value;



	if(obj_input.length >= 4)
	{
		alert("Se va a registrar la película con título "+obj_input+ " y de género "+obj_select);
	}

}