'use strict'

function reemplazar(mensaje, viejo, nuevo){
    let condicion = true;
    // console.log(viejo, nuevo)
    // console.log(mensaje.includes(viejo));
    // mensaje = mensaje.replace(viejo, nuevo);
    // console.log(mensaje);
    while (condicion){
        if (mensaje.includes(viejo)){
            mensaje = mensaje.replace(viejo, nuevo);
            console.log(mensaje)
            condicion = true;
        }
        else{
            condicion = false;
        }
    }
    return mensaje;
}

function encriptar(){
    var texto = document.getElementById('caja-texto').value;
    var imagen = document.getElementById('imagen');
    var etiqueta = document.getElementById('respuesta');

    var mensaje = '';
    for (let indice in texto){
        if (texto[indice] == 'a'){
            mensaje += 'ai';
        }
        else if(texto[indice] == 'e'){
            mensaje += 'enter';
        }
        else if(texto[indice] == 'i'){
            mensaje += 'imes';
        }
        else if(texto[indice] == 'o'){
            mensaje += 'ober';
        }
        else if(texto[indice] == 'u'){
            mensaje += 'ufat';
        }
        else{
            mensaje += texto[indice];
        }
    }
    imagen.style.display = 'none';
    etiqueta.style.display = 'inherit';
    etiqueta.innerHTML = mensaje;
}

function desencriptar(){
    var texto = document.getElementById('caja-texto').value;
    var imagen = document.getElementById('imagen');
    var etiqueta = document.getElementById('respuesta');

    var mensaje = '';
    texto = reemplazar(texto, 'ai', 'a');
    texto = reemplazar(texto, 'enter', 'e');
    texto = reemplazar(texto, 'imes', 'i');
    texto = reemplazar(texto, 'ober', 'o');
    texto = reemplazar(texto, 'ufat', 'u');

    imagen.style.display = 'none';
    etiqueta.style.display = 'inherit';
    etiqueta.innerHTML = texto;
}


var boton_encriptar = document.getElementById('encriptar');
boton_encriptar.onclick = encriptar;

var boton_desencritar = document.getElementById('desencriptar');
boton_desencritar.onclick = desencriptar;