
import React, {useState} from "react";
import "./logup.css"

function Logup(){
    const [formData, setFormData]= useState({
        nombre:" ", 
        apellido:" ",
        email: " ",
        password: " ",
        passwordConfirmar: " ",
        direccion: " ",
    });

    const handleInput = (e)=>{
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const enviarFormulario = (e)=> {
        e.preventDefault();
        console.log(formData);

        fetch("localhost/Logup",{
            method:"POST",
            headers:{
                "content-type": "aplication/json",
            },
            body: JSON.stringify(FormData),
        });
    };

    return(
        <div> 
            <header>
                <nav>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-login">
                        <div className="container-fluid">
                            <h1><a class="navbar-brand">ShopferLine</a></h1>
                        </div>
                        <div className="d-flex">
                            <a class="navbar-brand" href="http://localhost:3000/login">Regresar a Login</a>
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
                                    <div className="card-header container text-center">Logup</div>
                                        <div className="card-body">
                                            <form onSubmit={enviarFormulario}>
                                            <div className="mb-3">
                                                    <label for="nombre" class="form-label" >Nombre</label>
                                                    <input type="text" class="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleInput} required></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="apellido" class="form-label" >Apellidos</label>
                                                    <input type="text" class="form-control" id="apellido" name="apellido" value={formData.apellido} onChange={handleInput} required></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="email" class="form-label" >Correo electrónico</label>
                                                    <input type="email" class="form-control" id="email" name="email" value={formData.email}placeholder="hyfday@mail.com" onChange={handleInput} required></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="password" class="form-label">Contraseña</label>
                                                    <input type="password" class="form-control" id="password" name="password" value={formData.password} placeholder="password" onChange={handleInput}required></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="password" class="form-label">Confirmar contraseña</label>
                                                    <input type="password" class="form-control" id="password" name="passwordConfirmar" value={formData.passwordConfirmar} placeholder="password" onChange={handleInput} required></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="direccion" class="form-label">Dirección</label>
                                                    <input type="street-address" class="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleInput} required></input>
                                                </div>
                                                <div  className="card-body  container text-center">
                                                    <button type="submit" class="btn btn-primary" value={"Iniciar Sesión"}>Iniciar Sesión</button>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">¿Recuperar contraseña?</a>
                                                    <button type="submit" class="btn btn-primary btn-block"><a href="logup.html" class="text-white">Registrarse</a></button>

                                                </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <footer >
                <div id="footer"> 
                 Copyright © 2023 ShopferLine S.A
                </div>
       
            </footer>   

        </div>
       
    );
}
export {Logup};