// 1.Elegir producto
// 2. Sacar productos del Carrito 
// 3. Finalizar Carrito
// 4. Salir


const remera ={
    talle: 4,
    color: 'azul',
    precio: 2200,
    stock:10,
    
}
const body ={
    talle: 2,
    color: 'verde',
    precio:3000,
    stock: 10,
}

let opcionMenu = 0;
let remeraComprada = {}
let bodyComprada = {}

let carrito = []


const elegirRemera = function () {
    let remeraComprada= parseInt (prompt("cuantas remeras desea comprar?"))
    if (remera.stock < remeraComprada) {
        alert ("No hay tanta cantidad de Remeras")
    } else {
        alert ("se agregó al carrito la compra")
    }
   
    console.log (remeraComprada)

}
const elegirBody = function () {
    let bodyComprada= parseInt (prompt("cuantos bodys desea comprar?"))
    if (body.stock < bodyComprada) {
        alert ("No hay tanta cantidad de Bodys")
    } else {
        alert ("se agregó al carrito la compra")
    }
    console.log (bodyComprada)
    
}

function carritoCompra () {
    carrito.push ({remeraComprada,bodyComprada})
    console.log (carrito)

    carrito.forEach ( (carritoFinal) => {
        alert (`lleva ${remeraComprada} remeras y cada una sale un precio de ${remera.precio} tambien lleva ${bodyComprada} bodys y cada uno tiene un precio de ${body.precio}`)
    }
    )
    const carritoTotalPrecio= carrito.reduce((acc,el) => acc +el.remeraComprada *remera.precio,0)
    console.log (`el total a pagar es ${carritoTotalPrecio}`)      
    
}


 

do{
    opcionMenu = prompt ("Ingresa tu opción: \n1. Elegir Remera   \n2.Elegir Body \n3.Finalizar Carrito \n4.Salir")
    switch (opcionMenu) {
        case '1':
            elegirRemera();
        break;
        
        case '2':
            elegirBody();
        break;

        case '3':
            carritoCompra();

        break;

        case '4':
         alert ('Gracias por tu compra');
         break;

        default:
            alert ('No existe la operación deseada');
        break;
        
    }

} while (opcionMenu !=4);

