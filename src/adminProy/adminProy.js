import { Footer } from "../admin/footer";
import { HeaderAdmin } from "../admin/headerAdm";
import { MyNav } from "../admin/nav";
import { Section } from "../admin/section";


function AdminProy(props){
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <MyNav></MyNav>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
}
export {AdminProy};