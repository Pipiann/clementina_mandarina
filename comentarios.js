let comentarios= document.querySelector("#comentarios");


fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then((data) => {

  data.map ((item) =>{
    const contenido=document.createElement ("div");
    contenido.className= "comentarios_class";
    contenido.innerHTML=`
    <h1 > ${item.name} </h1>
    <h4> ${item.body} </h4>
    <h5> ${item.email} </h5>
    `;
    comentarios.append (contenido);
  })
    

  });
