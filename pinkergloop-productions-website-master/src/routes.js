import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Home, Artists, Merch} from './App';
import { SlideOne, SlideTwo, SlideThree } from './homeSlides';

export const ROUTES = [
    { path: '/', exact: true, element: <Home/> },
    { path: '/artists', element: <Artists/> },
    { path: '/merch', element: <Merch/> }
]