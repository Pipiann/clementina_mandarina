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
let remeraComprada=0;
let bodyComprada=0;
let carritoTotal= bodyComprada + remeraComprada;
let carritoTotalPrecio=(remera.precio * remeraComprada) + (body.precio * bodyComprada);

function elegirRemera () {
    let remeraComprada= parseInt (prompt("cuantas remeras desea comprar?"))
    if (remera.stock < remeraComprada) {
        alert ("No hay tanta cantidad de Remeras")
    } else {
        alert ("se agregó al carrito la compra")
    }
    
}
function elegirBody () {
    let bodyComprada= parseInt (prompt("cuantos bodys desea comprar?"))
    if (body.stock < bodyComprada) {
        alert ("No hay tanta cantidad de Bodys")
    } else {
        alert ("se agregó al carrito la compra")
    }
    
}

function carritoCompra ( bodyComprada, remeraComprada) {
           
    let carritoTotal=parseInt(remeraComprada + bodyComprada);
    console.log (carritoTotal)
    alert (`compraste un total de ${carritoTotal} productos`);
    let carritoTotalPrecio= (remera.precio * remeraComprada) + (body.precio * bodyComprada);
    alert (`Comprastes ${elegirRemera} Remeras y ${elegirBody} bodys, el total a pagar es ${carritoTotalPrecio}`);
}

// function carritoTotalPrecio ()



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