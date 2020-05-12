import React, { createRef } from 'react';
// import * as THREE from "three";
import SketchComponent from './components/SketchComponent';
import './App.css';

import bedroomOriginal from "./img/bedroom.jpg";
import bedroomDepth from "./img/bedroom-map.jpg";

import roomOriginal from "./img/room.jpg";
import roomDepth from "./img/room-map.jpg";

import kitchenOriginal from "./img/kitchen.jpg";
import kitchenDepth from "./img/kitchen-map.jpg";

import tvOriginal from "./img/tv.jpg";
import tvDepth from "./img/tv-map.jpg";

import toiletOriginal from "./img/toilet.jpg";
import toiletDepth from "./img/toilet-map.jpg";

import duckOriginal from "./img/duck.HEIC";
import duckDepth from "./img/duck-map.png";

import ballOriginal from "./img/ball.jpg";
import ballDepth from "./img/ball-map.jpg";

import ladyOriginal from "./img/lady.jpg";
import ladyDepth from "./img/lady-map.jpg";

import mountOriginal from "./img/mount.jpg";
import mountDepth from "./img/mount-map.jpg";


const sketches = [
  // {
  //   vth: 25,
  //   hth: 20,
  //   imageURLs : [kitchenOriginal, kitchenDepth],
  //   id: "kitchen",
  // },
  // {
  //   vth: 15,
  //   hth: 15,
  //   imageURLs : [bedroomOriginal, bedroomDepth],
  //   id: "bedroom",
  // },
  {
    vth: 15,
    hth: 15,
    imageURLs : [roomOriginal, roomDepth],
    id: "room",
  },
  // {
  //   vth: 15,
  //   hth: 10,
  //   imageURLs : [tvOriginal, tvDepth],
  //   id: "tv",
  // },
  // {
  //   vth: 25,
  //   hth: 15,
  //   imageURLs : [ballOriginal, ballDepth],
  //   id: "ball",
  // },
  // {
  //   vth: 25,
  //   hth: 15,
  //   imageURLs : [ladyOriginal, ladyDepth],
  //   id: "lady",
  // },
  // {
  //   vth: 25,
  //   hth: 15,
  //   imageURLs : [mountOriginal, mountDepth],
  //   id: "mount",
  // },
  // {
  //   vth: 15,
  //   hth: 45,
  //   imageURLs : [toiletOriginal, toiletDepth],
  //   id: "toilet",
  // },
  // {
  //   vth: 5,
  //   hth: 35,
  //   imageURLs : [duckOriginal, duckDepth],
  //   id: "duck",
  // },
];

function App() {

  const scrollNode =createRef();

  return (
    <div className="content" ref={scrollNode}>
      {
        sketches.map((sketch) => <SketchComponent {...sketch} getScrollNode={ () => scrollNode}/>)
      }
    </div>
  );
}

export default App;
