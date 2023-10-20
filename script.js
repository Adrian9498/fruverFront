let boton = document.getElementById("boton");
let enviar = document.getElementById("enviar");
let url = "https://fruverbackend-production.up.railway.app/traerInventario"

async function getInfo(){
    let contenedor = document.getElementById("contenedor");
    let resultado = await fetch(url);
    let jsonContent = await resultado.json();
    contenedor.innerHTML = "";
    jsonContent.forEach((producto) =>{
        contenedor.innerHTML += `<br>${producto.nombre}<br>${producto.precio}<br> <button onclick="eliminar(${producto.verdura_id})" >Eliminar Registro</button>`
    })
}


async function enviarFruta(){
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let precio_compra = document.getElementById("precio_compra").value;
    let cantidad = document.getElementById("cantidad").value;
    let fecha_ingreso = document.getElementById("fecha_ingreso").value;
    let verdura_fruta = document.getElementById("verdura_fruta").value;
    let proveedor_id = document.getElementById("proveedor_id").value;

    let objetoEnviar = {
        nombre,
        precio,
        precio_compra,
        cantidad,
        fecha_ingreso,
        verdura_fruta,
        proveedor_id
    }

    let res = await fetch("https://fruverbackend-production.up.railway.app/registrarProducto",{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(objetoEnviar)
    });

    let resultado = await res.json();
    console.log(resultado);
}

async function eliminar(id){
    let res = await fetch(`https://fruverbackend-production.up.railway.app/eliminarProducto/${id}`,{
        method: "DELETE",
    });
    let resultado  = await res.json();
    console.log(resultado);
}

boton.addEventListener('click', getInfo);
enviar.addEventListener('click', enviarFruta);