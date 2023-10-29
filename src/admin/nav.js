import "./style.css"
/*import "./nav.css";*/

function MyNav(props){
    return(
        <div className="navbar navbar-expand-lg" id="navA">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:3000/inicio">Incio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Usuarios</a>
                     Usuarios
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inventario</a>
                    
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Historial compras</a>
                 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Registro ventas</a>
                   
                    </li>
                </ul>
                <form className= "d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button class="btn btn-primary" type="submit">Buscar</button>
                </form>      
            </div>           
        </div>      
    );

}
export {MyNav};