import "./style.css"
/*import "./section.css"*/

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
                <ul>
                    <li>
                        <label for="producto1" >Producto A</label>
                        <input type="number" id="producto1" min="0" value="0"></input>
                    </li>
                    <li>
                        <label for="producto2" >Producto B</label>
                        <input type="number" id="producto2" min="0" value="0"></input>
                    </li>
                    <button id="agregar">Agregar al carrito</button>
                    <button id="eliminar">Eliminar del carrito</button>
                    


                </ul>
                

            </div>
        </div>
        
    );
}
export {Section};