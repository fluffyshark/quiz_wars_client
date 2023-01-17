import * as React from 'react';
import MapSVG from './MapSVG';
import MapImage from "./mapImage.webp"

export interface MapProps {
}



export default function Map (props: MapProps) {
  return (
    <div className='map'>
      <div className='mapSVG_container'><MapSVG /></div>
      <img src={MapImage} alt="" />
    </div>
  );
}

