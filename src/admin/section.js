import "./style.css"
/*import "./section.css"*/


function crearProducto(event){
    event.preventDefault();

    let producto={
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        precio:document.getElementById("precio").value,
    };

    fetch("http://localhost:3000/adminProy", {
        headers: {
            "Content-Type": "Application/json",
        },
        method: "POST",
        body: JSON.stringify(producto),
    });
} 

function Section(props){
    
    return (
        
<div className="container" id="adm">
            <div className="row">
                <div className="col-md-12">
                <h2>Administrador</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <p>Reportes</p>
                    </div>
                </div >
            </div>
            <div>
                <h1>Inventario</h1>
                <form onSubmit="crearProducto(event);" id="formAdmin">
                    <input type="text"  name="nombre" id="nombre" placeholder="Nombre" />
                    <textarea  id="descripcion" name="descripcion" placeholder="Description"></textarea>
                    <input type="number"  name="precio" id="precio" placeholder="precio" />
                    <input type="submit" value="Crear producto"/>
                </form>
                              
            </div>
        </div>
        
    );
}
export {Section};