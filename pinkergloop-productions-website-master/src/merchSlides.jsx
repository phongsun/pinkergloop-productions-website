import { useEffect, useState } from "react";
import "./App.js";
import Logo from "./img/logo.png";

export const Cart = (props) => {
    const [items, setItems] = useState(undefined);
    

}
export const MerchSlideOne = () => {
    return (
        <div id="merch-slide-one">
            <h1 className="super-header">merchandise</h1>
        </div>
    )
}

export const MerchSlideTwo = () => {
    return (
        <div className="slide-two">
            <h1 className="headline"><mark>T-SHIRTS</mark></h1>
            <div className="item">
                {/*Image here*/}
                <h2>Real T-Shirt</h2>
                <p>Totally a real shirt</p>
            </div>
        </div>
    )
}

export const MerchSlideThree = () => {
    return(
        <div className="slide-three">
            <h1 className="headline"><mark>HOODIES</mark></h1>
            <div className="item">
                {/*Image here*/}
                <h2>Real Hoodie</h2>
                <p>Totally a real hoodie</p>
            </div>
        </div>
    )
}

