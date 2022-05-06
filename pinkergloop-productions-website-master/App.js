import logo from './logo.svg';
import './App.css';
import { Nav } from './nav';
import { HomeSlideOne, HomeSlideTwo, HomeSlideThree } from './homeSlides';
import { ArtistSlideOne, ArtistSlideTwo } from './artistsSlides';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const Contact = () => {
  return(
    <>
      <Nav/>
    </>
  )
}

export const Merch = () => {
  return(
    <>
      <Nav/>
    </>
  )
}

export const Artists = () => {
  return(
    <>
      <Nav/>
      <ArtistSlideOne/>
      <div id="artist-slides">
      <ArtistSlideTwo/>
      </div>
    </>
  )
}

export const Home = () => {
  return (
    <>
      <Nav/>
        <HomeSlideOne/>
        <HomeSlideTwo/>
        <HomeSlideThree/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/artists">
          <Artists/>
        </Route>
        <Route path="/merch">
          <Merch/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
