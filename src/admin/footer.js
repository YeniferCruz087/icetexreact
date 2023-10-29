import "./style.css"
/*import "./footer.css"*/
function Footer(props){
    return(
        <div className="footer" id="footerHome">
            <div className="container text-center link-underline-light">
                <div className="row d-flex justify-content-center" id="piePagina">
                    <div className="col-md-12" > Linea de atencion 018000 111111 o 608 3333333 | shopferLine@mail.com</div>
                    <div className="col-md-12"> © 2023 ShopferLine S.A </div>
                </div>
            </div>
        </div>
    );

}
export {Footer};