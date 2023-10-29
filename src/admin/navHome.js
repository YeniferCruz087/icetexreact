import "./style.css"
/*import "./navHome.css"*/
function NavHome(props){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navHome">
            <div className="container-fluid" id="linkBarHome">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" > 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="navbar-nav dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <b>SopferLine</b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Configuración</a></li>
                                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                            </ul>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perfil</a>
                            </li>
                            <li className="nav-item  dropdown" >
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle " id="categorias" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a  className="dropdown-item " href="#">Mujer</a></li>
                                        <li><a className="dropdown-item" href="#">Hombre</a></li>
                                        <li><a  className="dropdown-item" href="#">Niños</a></li>
                                        <li><hr className="dropdown-divider"></hr></li>
                                        <li><a className="dropdown-item" href="#">Something</a></li>
                                    </ul>
                                </li>
                            </li>
                            <li className="nav-item d-flex">
                                <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">Historial compras</a>
                            </li>
                        </li>     
                    </ul>
                    <div>
                    <form className="d-flex"  role="search" id="formHome">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                        <button className="btn btn btn-primary " id="btnBuscHome" type="submit ">Buscar</button>
                    </form>
                    </div>
                </div>
            </div>
        </nav>

            
    );

}
export {NavHome};