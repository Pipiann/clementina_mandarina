let carrito=[];
const remerasIngreso = document.getElementById ("remerasIngreso");

productoRemera.forEach((productoRemera) => {
    let ropa= document.createElement ("div");
    ropa.className= "ropa_grilla"
    ropa.innerHTML =`
    <img src= "${productoRemera.img}">
    <h3> ${productoRemera.nombre}</h3>
    <p class "precio"> ${productoRemera.precio} $</p>
    `; 
    remerasIngreso.append (ropa);
    let comprar =document.createElement ("button");
    comprar.innerText= "comprar";
    comprar.className= "btn_Comprar"

    ropa.append (comprar);

    comprar.addEventListener ("click", () =>{
        carrito.push({
            nombre: productoRemera.nombre,
            talle: productoRemera.talle,
            precio: productoRemera.precio,         

        });
        console.log(carrito);
    });
    
    
});

