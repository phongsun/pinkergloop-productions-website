import React, { useEffect, useState } from "react";
import "./App.js";
import Logo from "./img/logo.png";
import SunIi from "./img/sunii.jpg";

export const ArtistSlideOne = () => {
    return (
        <div id="artistslide-one">
            <h1 className="super-header">artists</h1>
        </div>
    )
}

export const ArtistSlideTwo = () => {
    const [data, setData] = useState("aaaaa");
    useEffect(() => {
        fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
    return (
        <div className="slide-two artist-slide">
            <h1 className="headline"><mark>PINKERGLOOP</mark></h1>
            <img src="https://yt3.ggpht.com/ytc/AKedOLT-Gdya4G-WJ6Hw9mqOyjGadAA5DwV4PJaxpA5v=s900-c-k-c0x00ffffff-no-rj" width="70%"/>
            <div className="bio"><p>{!data ? "Loading..." : data}</p></div>
            <br/>
        </div>
    )
}

/*export const ArtistSlideThree = () => {
    return(
        <div className="slide-three artist-slide">
            <h1 className="headline"><mark>SUN II</mark></h1>
            <img src={SunIi} width="70%"/>
            <div className="bio"><p>Sample</p></div>
        </div>
    )
}*/