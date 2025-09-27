calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento;
    valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIVA=function(monto){
    let precioSinIVA;
    precioSinIVA=monto*0.12;
    return precioSinIVA;
}

calcularSubtotal=function(precio,cantidad){
    let totalPago;
    totalPago=precio*cantidad;
    return totalPago;
}

calcularTotal=function(subtotal,descuento,iva){
    let valorPago;
    valorPago=(subtotal-descuento)+iva;
    return valorPago
}