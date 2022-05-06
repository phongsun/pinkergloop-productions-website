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
    return (
        <div className="slide-two artist-slide">
            <h1 className="headline"><mark>PINKERGLOOP</mark></h1>
            <img src="https://i1.sndcdn.com/avatars-000484294407-wcf4pf-t500x500.jpg" width="70%"/>
            <div className="bio" id="weird-overflow"><p>Good EDM Artist Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.</p></div>
            <br/>
        </div>
    )
}

export const ArtistSlideThree = () => {
    return(
        <div className="slide-three artist-slide">
            <h1 className="headline"><mark>SUN II</mark></h1>
            <img src={SunIi} width="70%"/>
            <div className="bio"><p>Good Rapper Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.</p></div>
        </div>
    )
}