
import { Eshop } from "../admin/eShop";
import { Footer } from "../admin/footer";
import { HeaderHome } from "../admin/headerHome";
import { NavHome } from "../admin/navHome";
import { Mpagos } from "../admin/metodosPago";



function Home(props){
    return (
        <div>
            <HeaderHome></HeaderHome>
            <NavHome></NavHome>
            <Eshop></Eshop>
            <Mpagos></Mpagos>
            <Footer></Footer>
        </div>
    );

}
export {Home}