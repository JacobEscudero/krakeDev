saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido;
    apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura")

    let mensajeBienvenidad="Bienvenido "+ nombre+ " "+apellido;
    mostrarTexto("lblResultado", mensajeBienvenidad);

    mostrarImagen("imgSaludo","./imagenes/saludo.gif");

    mostrarTextoEnCaja("txtNombre","");
}

mostrarTexto=function( idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;

}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}

mostrarImagen=function( idComponente, rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;

}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;

    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
} 

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}

