import {useState} from "react";
import { Cart } from "./Carrito";
import { ProductList } from "./products";
import "./style.css"
function Eshop(){

    const [selectedItems, setSelectItem]= useState([]);

    return (
        <div className="container d-flex ">
            <ProductList setSelectItem={setSelectItem}></ProductList>
            <Cart selectedItems={selectedItems}></Cart>

        </div>
    );
}

export {Eshop};