jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje", "ES MAYOR A 3")
        cambiarTexto("lblResultado", "GANASTE")
    }else{
        cambiarTexto("lblMensaje","ES MENOR A 3");
        cambiarTexto("lblResultado","PERDISTE, ESTAS DE MALAS");
    }
}

//crear un funcion llamada lanzaDado 
// no recibe parametros
//Retorna un numero aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); //numero entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);// entre 0 y 5
    valorDado= numeroEntero+1;
    return valorDado;
}