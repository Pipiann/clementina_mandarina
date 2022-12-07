let carrito= JSON.parse (localStorage.getItem ("carrito")) || [];
const remerasIngreso = document.getElementById ("remerasIngreso");
const carrito_Compra = document.getElementById ("carrito_Compra");
const modal= document.getElementById ("modal");

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

carrito_Compra.addEventListener ("click", () =>{
    modal.innerHTML="";
    modal.style.display= "flex";
    const modal_Header = document.createElement ("div");
    modal_Header.innerHTML= `
    <h1 class="modal_Header"> Carrito </h1>
    `;
    modal.append (modal_Header);

    const modal_Button= document.createElement ("h1");
    modal_Button.innerText= "X";
    modal_Button.className= "modal_Button_Style";
    modal.append (modal_Button);

    modal_Button.addEventListener ("click",() =>{
        modal.style.display= "none";
    }
    )

    
    carrito.forEach((productoRemera)=> {
        let carrito_modal= document.createElement("div");
        carrito_modal.className="carrito_modal";
        carrito_modal.innerHTML= `
        
        <h3>${productoRemera.nombre}</h3>
        <p>$ ${productoRemera.precio} </p>
        `;

        modal.append (carrito_modal)

    });

    const total= carrito.reduce ((acc,el)=> acc + el.precio,0);

    const total_Carrito= document.createElement ("div");
    total_Carrito.className="carrito_modal_total"
    total_Carrito.innerHTML=`
    Total a pagar: $ ${total}`;
    modal.append (total_Carrito);
    
});

const saveLocal =() =>{
    localStorage.setItem ("carrito", JSON.stringify (carrito));

}

