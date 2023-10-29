import React, {useEffect, useState} from "react";

function Api(){
    const [info, setInfo]= useState("");

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon/charmander")
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
        });
    });
    return (
        <div className="Api">
            <div className="container d-flex justify-content-around">
                {info === " " ? <p>Cargando</p>: <p>Datos adquiridos</p>}

            </div>

        </div>
    );
}
  
export {Api};