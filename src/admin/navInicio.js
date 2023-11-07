import "./style.css"
import React from "react";
import telefonoPNG from "./telefono.png";
/*import "./navInicio.css"*/
function NavInicio(props){
    return(
        <nav>
            <div className="navIndex">
                <div id="navA" className="nav justify-content-end">
                    <form className="d-flex" role="search" id="formInicio">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                        <button className="btn btn-primary " type="submit" id="botonInicio">Buscar</button>
                    </form>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/login">Iniciar sesión</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src={telefonoPNG} alt="" width="20px"/>Contactos</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

            
    );

}
export {NavInicio};