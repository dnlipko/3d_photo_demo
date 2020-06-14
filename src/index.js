import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

import ballOriginal from "./img/ball.jpg";
import ballDepth from "./img/ball-map.jpg";

import ladyOriginal from "./img/lady.jpg";
import ladyDepth from "./img/lady-map.jpg";

import mountOriginal from "./img/mount.jpg";
import mountDepth from "./img/mount-map.jpg";

import img_2_1 from "./img/2_1.jpg";
import img_2_1Depth from "./img/2_1-map.png";

import img_2_2 from "./img/2_2.jpg";
import img_2_2Depth from "./img/2_2-map.png";

import img_2_6 from "./img/2_6.jpg";
import img_2_6Depth from "./img/2_6-map.png";

import img_2_8 from "./img/2_8.jpg";
import img_2_8Depth from "./img/2_8-map.png";

import img_2_10 from "./img/2_10.jpg";
import img_2_10Depth from "./img/2_10-map.png";

import img_2_7 from "./img/2_7.jpg";
import img_2_7Depth from "./img/2_7-map.png";

import img_2_12 from "./img/2_12.jpg";
import img_2_12Depth from "./img/2_12-map.png";

const sketches = [
  {
    vth: 25,
    hth: 25,
    imageURLs : [img_2_6, img_2_6Depth],
    id: "img_2_6",
  },
  {
    vth: 30,
    hth: 25,
    imageURLs : [img_2_7, img_2_7Depth],
    id: "img_2_7",
  },
  {
    vth: 25,
    hth: 25,
    imageURLs : [bedroomOriginal, bedroomDepth],
    id: "bedroom",
  },
  {
    vth: 35,
    hth: 55,
    imageURLs : [img_2_1, img_2_1Depth],
    id: "img_2_1",
  },
  {
    vth: 25,
    hth: 35,
    imageURLs : [img_2_2, img_2_2Depth],
    id: "img_2_2",
  },
  {
    vth: 25,
    hth: 25,
    imageURLs : [img_2_12, img_2_12Depth],
    id: "img_2_12",
  },

  {
    vth: 25,
    hth: 20,
    imageURLs : [img_2_8, img_2_8Depth],
    id: "img_2_8",
  },
  {
    vth: 25,
    hth: 25,
    imageURLs : [img_2_10, img_2_10Depth],
    id: "img_2_10",
  },
  {
    vth: 25,
    hth: 20,
    imageURLs : [roomOriginal, roomDepth],
    id: "room",
  },
  // {
  //   vth: 25,
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
  {
    vth: 35,
    hth: 30,
    imageURLs : [kitchenOriginal, kitchenDepth],
    id: "kitchen",
  },
  // {
  //   vth: 15,
  //   hth: 45,
  //   imageURLs : [toiletOriginal, toiletDepth],
  //   id: "toilet",
  // },
];

const webImages = [
  // {
  //   image: '3d-image-1',
  //   id: 10
  // }, 
  {
    image: '3d-image-2',
    id: 1
  }, 
  {
    image: '3d-image-3',
    id: 2
  }, 
  // {
  //   image: '3d-image-4',
  //   id: 3
  // }, 
  {
    image: '3d-image-5',
    id: 9
  }, 
  {
    image: '3d-image-5',
    id: 5
  }, 
  {
    image: '3d-image-6',
    id: 6
  }, 
  {
    image: '3d-image-7',
    id: 7
  }, 
  {
    image: '3d-image-8',
    id: 8
  }, 
  // {
  //   image: '3d-image-9',
  //   id: 4
  // }, 
  {
    image: '3d-image-10',
    id: 3
  }, 
]; 
const mobileImages = [
  {
    image: '3d-image-mobile-1',
    id: 4
  }, 
  {
    image: '3d-image-mobile-2',
    id: 1
  }, 
  {
    image: '3d-image-mobile-3',
    id: 0
  }, 
  // {
  //   image: '3d-image-mobile-4',
  //   id: 3
  // }, 
  {
    image: '3d-image-mobile-5',
    id: 5
  }, 
  {
    image: '3d-image-mobile-6',
    id: 6
  }, 
  {
    image: '3d-image-mobile-7',
    id: 7
  }, 
  {
    image: '3d-image-mobile-8',
    id: 8
  }, 
  // {
  //   image: '3d-image-mobile-9',
  //   id: 9
  // },
  {
    image: '3d-image-mobile-10',
    id: 9
  }
]; 

const renderNode = ({ image , id}) => {
  const node = document.getElementById(image);
  if (node) {
    ReactDOM.render(
      <React.StrictMode>
        <SketchComponent {...sketches[id]}/>
      </React.StrictMode>,
      node
    );
  }
}

webImages.forEach(renderNode);
mobileImages.forEach(renderNode);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
