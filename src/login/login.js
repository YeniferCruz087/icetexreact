
import React, {useState} from "react";
import "./login.css"


function Login(){
    const [formData,setFormData]= useState({
        email:" ",
        password:" ",
    });

    const handleInput = (e)=>{
        const {name, value} = e.target; 
        setFormData({ 
            ...formData,
            [name]:value,
        });

    };
    const enviarFormulario = (e)=>{
        e.preventDefault();

        console.log(formData);

       
        fetch("localhost/Login",{
            method:"POST",
            headers:{
                "content-type":"aplication/json",
            },
            body: JSON.stringify(formData),
        });
    };
    

    return(
        <div>
            <header>
                <nav>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-login">
                        <div className="container-fluid">
                            <h1><a class="navbar-brand" href="http://localhost:3000/inicio">ShopferLine</a></h1>

                        </div>

                    </nav>
                </nav>
               
            </header>

        <div id="formulario">
            <div className="container">
                <section>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card">
                                <div class="card-header container text-center">Login</div>
                                    <div class="card-body">
                                        <form onSubmit={enviarFormulario}>
                                            <div className="mb-3">
                                                <label for="email" class="form-label" >Correo electrónico</label>
                                                <input type="email" class="form-control" id="email" name="email" value={formData.email} onChange={handleInput} placeholder="hyfday@mail.com" required></input>
                                            </div>
                                            <div className="mb-3">
                                                <label for="password" class="form-label" >Contraseña</label>
                                                <input type="password" class="form-control" id="password" name="password" value={formData.password} onChange={handleInput} placeholder="password" required></input>
                                            </div>
                                            <div className="card-body  container text-center">
                                                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">¿Recuperar contraseña?</a>
                                                <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                                            </div>
                                        </form>
                                    </div>   
                            </div>
                        </div>
                    </div>

                </section>

                  
            </div>  
        </div>

        <footer>
            <div id="footer">
            Copyright © 2023 ShopferLine S.A
            </div>
        </footer>
        </div>
    );
}
export {Login}