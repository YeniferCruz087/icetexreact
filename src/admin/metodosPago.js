import "./style.css"
import masterCardPNG from "./masterCard.png";
import efectyPNG from "./efecty.png";
import daviPlataPNG from "./daviplata2.png";
import psePNG from "./PSE.png";
import nequiPNG from "./nequi.png";

/*import "./footer.css"*/
function Mpagos(props){
    return(
        <section id="metodosPago">
            <div className="container text-center">
                <div className="row justify-content-center align-items-center">
            <div className="col-md-6"></div>
            <div className="col-md-1 offset-md-1">
              <a href="#">
                <img src={masterCardPNG} class="img-fluid" width="50px" alt="master card"/>
              </a>
            </div>
            <div className="col-md-1">
              <a href="#">
                <img src={efectyPNG} class="img-fluid" width="60px" alt="efecty"/>
              </a>
              </div>
            <div className="col-md-1">
              <a href="#">
                <img src={daviPlataPNG} class="img-fluid" width="30px" alt="daviplata"/>
              </a>
            </div>
            <div className="col-md-1">
              <a href="#">
                <img src={psePNG} class="img-fluid" width="50px" alt="pse"/>
              </a>
            </div>
            <div className="col-md-1">
              <a href="#"/>
                <img src={nequiPNG} class="img-fluid" width="300px" alt="nequi"></img>
            </div>
          </div>
        </div> 
    </section>
    );

}
export {Mpagos};