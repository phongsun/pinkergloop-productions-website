import "./App.js";
import Logo from "./img/logo.png";
import Instagram from "./img/instagram.png";

export const HomeSlideOne = () => {
    return (
        <div id="home-slide-one">
            <img src={Logo} id="logo"/>
        </div>
    )
}

export const HomeSlideTwo = () => {
    return (
        <div className="slide-two">
            <h1 className="headline"><mark>NEW RELEASES</mark></h1>
            <h2 className="headline">Pretty Rave Girl Remix by Pinkergloop</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ARNaMwjQTRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2 className="headline">Upcoming Single by Sun II</h2>
            <p>Hottest New Underground Rapper</p>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1165108507%3Fsecret_token%3Ds-hMzyjaZfHHR&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    )
}

export const HomeSlideThree = () => {
    return(
        <div className="slide-three">
            <h1 className="headline"><mark>SOCIAL MEDIA</mark></h1>
            <p>None for the label itself yet :(</p>
            <p>Feel free to follow our <a href="https://www.instagram.com/ultimatumsupply/">merch account tho</a></p>
        </div>
    )
}