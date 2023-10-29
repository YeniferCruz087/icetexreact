import { useEffect, useState } from "react";

function ProductElement(props){

    function addToCart(){
       props.add((arrayViejito)=> [...arrayViejito, {name: props.name, price: props.price, description:props.description}]);

    }

    return (
        <div className="card col-3 "  id="catalogo">
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-around col-12">
            <button className="btn btn-outline-secondary">{props.price}</button>
            <button type="button" className="btn btn-success" id="btonComprar" onClick={addToCart}>
                Comprar</button>
            </div>
         
        </div>
    </div>
    ); 
}

function ProductList(props){
    const [products, setProducts]= useState([]);
    let pokemons =["charmander", "pikachu", "ditto", "squirtle", "metapod","bulbasaur"];

   useEffect(()=>{
    pokemons.map((pokemon) => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon , {
        headers:{
            accept: "application/json",            
        },
        method: "GET",
        mode: "cors",
    })
        .then((response)=>response.json())
        .then((data)=>{
            setProducts((arrayViejito)=>[
                ...arrayViejito,
                {
                name: data.name, 
                price: data.weight * 100, 
                description: `Tiene ${data.moves.length} movimientos`,
                img:data.sprites.front_default,
         },
        ]);
        })
        .catch((e)=> console.log(e));

    });
   }, []);
   
    return (
        <div className="col-12 d-flex flex-wrap justify-content-around" id="products">
            <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>
            {products.map((product)=>{
                return (
                    <ProductElement
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    img={product.img}
                    add={props.setSelectItem}
                    ></ProductElement>
                    )
                
            })}

        </div>
    );
}
export {ProductList};