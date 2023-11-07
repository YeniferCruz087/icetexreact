import "./headerHome.css";
import logoPNG from "./LogoShopferLine.png";
import facebookPNG from "./facebook.png";
import whatsAppPNG from "./WhatsApp.png";
import youTobePNG from "./YouTobe.png";
import instagramPNG from "./Instagram.png";


function HeaderHome(props){
    return(
        <header>
            <div  id="headerHome">
                <ul className="nav justify-content-center align-items-right">
                    <li className="nav-item" id="logo">
                        <a className="nav-link  " href="#" ><img src={logoPNG} alt="redes Instagram" width="130px"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-black"    aria-current="page" href="#">Envios</a>
                    </li >
                    <li className="nav-item">
                        <a className="nav-link text-black"  href="#" >preguntas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black"  href="#">Contactos</a>
                    </li >

                    <li className="nav-item">
                        <a className="nav-link text-black " href="#"> Siguenos:</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={facebookPNG} alt="redes facebook" width="20px"></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={whatsAppPNG} alt="redes WhatsApp" width="20px"></img></a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="#"><img src={youTobePNG} alt="redes YouTobe" width="20px"></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  " href="#"><img src={instagramPNG} alt="redes Instagram" width="20px"></img></a>
                    </li>
                </ul>

            </div>

        </header>
      

            
    );

}
export {HeaderHome};