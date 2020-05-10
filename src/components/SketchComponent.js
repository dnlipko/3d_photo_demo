import React, { useEffect } from 'react';
import Sketch from './Sketch';

function SketchComponent(props) {
  const {id} = props;

  useEffect(() => {
    const { vth, hth, imageURLs, id, getScrollNode} = props;
    new Sketch({
      vth,
      hth,
      imageURLs,
      id,
      getScrollNode
    });
  });

  return (
    <div className="photo">
        <div id={id}>
        </div>
    </div>
  );
}

export default SketchComponent;