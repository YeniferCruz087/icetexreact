import "./style.css";
import logoPNG from "./LogoShopferLine.png";

/*import "./headerInicio.css"*/
function MyHeader(props){
  return(
    <header>
      <div className="container text-center navbar navbar-expand-lg bg-body-tertiary" id="inicio">
        <div className="row container-fluid"> 
          <div className="col">
            <img className="logo" src={logoPNG} alt="logo ShopferLine"></img>
          </div>
          <div className="col">
            <h1>ShopferLine</h1>
          </div>
          <div>
            <p>Disfruta comprando ya!</p>
          </div>
        </div>
      </div>


    </header>
  );

}
export {MyHeader}


 