import React, {useState, useEffect} from "react";
import "./style.css"
/*import "./cardProy.css"*/


function Card(props){
    return (
        <div className="container d-flex catalogo " id="Catalogo-productos">
                    <div className="card d-flex">
                        <img  src={props.img}
                            className="card-img-top d-flex align-self-center"
                            alt="Ropa mujer">
                        </img>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">Pokemons</p>
                            <p className="card-text">$250000</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>    
        </div>
    );
}

function CardProy(){
    const[data, setData]= useState([]);
    const [loaded, setLoaded]= useState(false);
    const pokemons = ["pikachu", "ditto", "gengar"];
  
    useEffect(()=>{

        if(loaded === false){
            
        pokemons.forEach((pokemon)=>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
               setData((arrayViejo) => [...arrayViejo,  <Card title={data.name} img={data.sprites.front_default}></Card> ]);
            });
        });

        setLoaded(true);
        }

    },[loaded]);
    return( 
        <div className="CardProy d-flex" id="cardInicio"> 
            <div className="container">
                <div className="col-4" >
                    {data.length === 0  ? (
                        "Cargando"
                    ) : (
                        data   
                    )}
                       
                </div>    
            </div>
        </div>      
    );
}

export{CardProy};
