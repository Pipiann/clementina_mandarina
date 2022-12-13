const carrito_carga= () =>{

    modal.innerHTML="";
    modal.style.display= "flex";
    const modal_Button= document.createElement ("h1");
    modal_Button.innerText= "X";
    modal_Button.className= "modal_Button";
    modal.append (modal_Button);

    modal_Button.addEventListener ("click",() =>{
        modal.style.display= "none";
    }
    )
    const modal_Header = document.createElement ("div");
    modal_Header.innerHTML= `
    <h1 class="modal_estilo_header"> Carrito </h1>
    `;
    modal.append (modal_Header);

    

    
    carrito.forEach((productoRemera)=> {
        let carrito_modal= document.createElement("div");
        carrito_modal.className="carrito_modal";
        carrito_modal.innerHTML= `
        <img src ="${productoRemera.img}">
        <h3>${productoRemera.nombre}</h3>
        <p>$ ${productoRemera.precio} </p>
        <p> Cantidad: ${productoRemera.cantidad}</p>
        <p> Total: ${productoRemera.cantidad * productoRemera.precio} </p>
        `;

        modal.append (carrito_modal);

        let eliminar_cruz= document.createElement("span");
        eliminar_cruz.innerText= "❌";
        eliminar_cruz.className="carrito_eliminar";
        modal.append (eliminar_cruz);
        eliminar_cruz.addEventListener ("click", eliminar_producto);   
        
        

    });

    const total= carrito.reduce ((acc,el)=> acc + el.precio * el.cantidad,0);

    const total_Carrito= document.createElement ("div");
    total_Carrito.className="carrito_modal_total"
    total_Carrito.innerHTML=`
    Total a pagar: $ ${total}`;
    modal.append (total_Carrito);
     
};    
    



carrito_Compra.addEventListener ("click", carrito_carga);


const eliminar_producto =() =>{
    const foundId = carrito.find((e) => e.id );

    carrito= carrito.filter ((carritoId) => {
        return carritoId !== foundId;
        
    });
    contador_Carrito ();
    carrito_carga ();
    

}

const contador_Carrito= () =>{
    cantidad_Carrito.style.display= "block"
    cantidad_Carrito.innerText= carrito.lenght;
}