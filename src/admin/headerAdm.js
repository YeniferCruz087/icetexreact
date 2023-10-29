/*import "./headerAdmin.css"*/

function HeaderAdmin(props){
    return (
        <header>
            <div className="container text-center navbar navbar-expand-lg bg-body-tertiary">
                <div className="row container-fluid">
                    <div class="col">
                        <img class="logo" src="imagenes/LogoShopferLine.png" alt="logo ShopferLine"></img>
                    </div>
                    <div class="col">
                        <h1>ShopferLine</h1>
                    </div>
                    <div class="col">
                        <p>Tu trabajo es importante y tiene el poder de hace la diferencia</p>
                    </div>

                </div>
            </div>
        </header>
    );
}
export {HeaderAdmin};

