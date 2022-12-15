// let bodysIngreso= document.querySelector ("#bodysIngreso");
// fetch ("data.json")
// .then ((resp) =>resp.json())
// .then ((data) =>{
//     data.map ((item) =>{
//         const content = document.createElement ("div")
//         content.className= "ropa_grilla";
//         content.innerHTML=`
//         <img src= "${item.img}">
//         <h3> ${item.nombre}</h3>
//         <p> $ ${item.precio} </p>
//         `; 

//         bodysIngreso.append (content);
//         let comprar =document.createElement ("button");
//         comprar.innerText= "comprar";
//         comprar.className= "btn_Comprar"

//         bodysIngreso.append (comprar);

//         comprar.addEventListener ("click", () =>{

//             const sumar = carrito.some ((sumar_Producto) => sumar_Producto.id === productoRemera.id );
            
            
//             if (sumar){
//              carrito.map ((prod) =>{
//                  if (prod.id === bodysIngreso.id){
//                      prod.cantidad ++;
//                  }
//              })
//             }else{
//                  carrito.push({
//                      id: bodysIngreso.id,
//                      nombre: bodysIngreso.nombre,
//                      talle: bodysIngreso.talle,
//                      precio: bodysIngreso.precio,  
//                      cantidad: bodysIngreso.cantidad,       
         
//                  });
//              };
//              contador_Carrito ();
//              saveLocal ();
//         });

//     })

    
    
// });




// const total= carrito.reduce ((acc,el)=> acc + el.precio,0);

// const total_Carrito= document.createElement ("div");
// total_Carrito.className="carrito_modal_total"
// total_Carrito.innerHTML=`
// Total a pagar: $ ${total}`;
// modal.append (total_Carrito);

// ;




// const saveLocal =() =>{
// localStorage.setItem ("carrito", JSON.stringify (carrito));

// }


// contador_Carrito ();
