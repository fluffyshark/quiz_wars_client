import * as React from 'react';
import MapSVG from './MapSVG';

type WidthHeightProps = {
  height: number
  width?: number
}


export default function Map ({height, width}: WidthHeightProps ) {


  React.useEffect(() => {
    
    setTimeout(() => {
      (document.getElementById("mapComponent") as HTMLFormElement).style.width = `${width}px`;
      (document.getElementById("mapComponent") as HTMLFormElement).style.height = `${height}px`;
    }, 500);

  }, [height])

  
  return (
    <div id="mapComponent" className='map' >
      <div id="mapSVG_containerId"  className='mapSVG_container'><MapSVG /></div>
    {/* <img id="mapImage" src={MapImage} alt="" />  */}  
    </div>
  );
}

