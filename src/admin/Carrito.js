import { useState } from "react";
import "./style.css"
function Producto(props){
    return (
       
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.name}</div>
                    {props.description}
                </div>
                <span className="badge bg-primary rounded-pill">{props.price}</span>
            </li>
     
    );   
}

function Cart(props){
    let total= 0;

    function pay(){
        let venta={
            products: props.selectedItems,
            total: total,
        };

        fetch("/pay",{
            headers:{
                "Content-type": "Aplication/json",
            },
            method: "POST",
            body:JSON.stringify(venta),
        });
    }

    
    return(
        
        <div className="col-4 mh-100"  id="carritoTitulo" >
            <h2 className="d-flex justify-content-center" >Carrito Compras</h2>
            <ol className="list-group list-group-numbered" id="list">
               {props.selectedItems.map((item)=>{
                total = total + item.price;
                return <Producto 
                name={item.name}
                description={item.description}
                price={item.price}
                ></Producto>;
               })}
            </ol>
            <div class="d-flex justify-content-around col-12 mt-4">
            <button type="button" class="btn btn-outline-dark">Total: {total}</button>
            <button type="button" class="btn btn-success" onClick={pay}>Pagar Carrito</button>
            </div>
        </div>
        
    )
}
export {Cart};