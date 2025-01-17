// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
const largoLista = 10;
const largoNombre = 15;
const minParticipantes = 2;

function agregarAmigo(){
	document.getElementById("resultado").innerHTML = "";
	objNombre = document.getElementById("amigo");
	nombre = objNombre.value;
	if(nombre.length == 0){
		alert("Por favor, ingrese un nombre válido. ");
		objNombre.focus();
		return;		
	}else{
		if(arrayAmigos.length < largoLista){
			if(arrayAmigos.indexOf(nombre) == -1){
				if(nombre.length <= largoNombre){
					arrayAmigos.push(nombre);
					console.log("Largo:" + arrayAmigos.length);
					
					objLista = document.getElementById("listaAmigos");
					objLista.innerHTML = objLista.innerHTML + "<br>" + nombre;
					
					objNombre.value = "";
					objNombre.focus();
				}else{
					alert("El nombre no puede contener mas de "+ largoNombre + " caracteres.");
					objNombre.focus();
				}
			}else{
				alert("El nombre del amigo ya se encuentra en el listado.");
				objNombre.value = "";
				objNombre.focus();
			}
		}else{
			alert("Ha llegado al limite de amigos para agregar.\nmax:" + largoLista);
			objNombre.value = "";
		}
 	}
}

function sortearAmigo(){
	objResultado = document.getElementById("resultado");
	objLista = document.getElementById("listaAmigos");
	objResultado.innerHTML = "";
	
	if(arrayAmigos.length >= minParticipantes ){
		let ganador = parseInt(Math.random() * arrayAmigos.length);
		console.log("Ganador:" + ganador);
		objLista.innerHTML = "";
		objResultado.innerHTML = arrayAmigos[ganador];
		arrayAmigos = [];
	}else{
		alert("Para realizar el sorteo debe haber un minimo de " + minParticipantes + " participantes.");
	}
}