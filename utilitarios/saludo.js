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