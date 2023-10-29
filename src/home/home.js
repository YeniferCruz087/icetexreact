
import { Eshop } from "../admin/eShop";
import { Footer } from "../admin/footer";
import { HeaderHome } from "../admin/headerHome";
import { NavHome } from "../admin/navHome";



function Home(props){
    return (
        <div>
            <HeaderHome></HeaderHome>
            <NavHome></NavHome>
            <Eshop></Eshop>
            <Footer></Footer>
        </div>
    );

}
export {Home}