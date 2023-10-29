
import { CardProy } from "../admin/cardProy";
import { Footer } from "../admin/footer";
import { MyHeader } from "../admin/headerInicio";
import { NavInicio } from "../admin/navInicio";


function Inicio(props){
   
    return(
        <div>
            <MyHeader></MyHeader>
            <NavInicio></NavInicio>
            <CardProy></CardProy>
           
            <Footer></Footer>                  
        </div>      
    );

}
export {Inicio};