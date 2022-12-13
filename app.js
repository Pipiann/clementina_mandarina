let carrito= JSON.parse (localStorage.getItem ("carrito")) || [];
const remerasIngreso = document.getElementById ("remerasIngreso");
const carrito_Compra = document.getElementById ("carrito_Compra");
const modal= document.getElementById ("modal");
const cantidad_Carrito= document.getElementById ("cantidadCarrito");



productoRemera.forEach((productoRemera) => {
    let ropa= document.createElement ("div");
    ropa.className= "ropa_grilla";
    ropa.innerHTML =`

    <img src= "${productoRemera.img}">
    <h3> ${productoRemera.nombre}</h3>
    <p> $ ${productoRemera.precio} </p>
    `; 
    remerasIngreso.append (ropa);
    let comprar =document.createElement ("button");
    comprar.innerText= "comprar";
    comprar.className= "btn_Comprar"

    ropa.append (comprar);

    comprar.addEventListener ("click", () =>{

       const sumar = carrito.some ((sumar_Producto) => sumar_Producto.id === productoRemera.id );
       
       
       if (sumar){
        carrito.map ((prod) =>{
            if (prod.id === productoRemera.id){
                prod.cantidad ++;
            }
        })
       }else{
        carrito.push({
            id: productoRemera.id,
            nombre: productoRemera.nombre,
            talle: productoRemera.talle,
            precio: productoRemera.precio,  
            cantidad: productoRemera.cantidad,       

        });
        };
        contador_Carrito ();
    });
    
    
});



const total= carrito.reduce ((acc,el)=> acc + el.precio,0);

const total_Carrito= document.createElement ("div");
    total_Carrito.className="carrito_modal_total"
    total_Carrito.innerHTML=`
    Total a pagar: $ ${total}`;
    modal.append (total_Carrito);
    
;




const saveLocal =() =>{
    localStorage.setItem ("carrito", JSON.stringify (carrito));

}

