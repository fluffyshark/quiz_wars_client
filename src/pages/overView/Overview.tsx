import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import VictoryBar from '../../components/victoryBar/VictoryBar';
import Map from "../../components/map/Map"

import { handleRegionOwnership } from '../regionSelectView/components/handleRegionOwnership';


export default function Overview () {

  const [regionId, setRegionId] = React.useState<string>("")

  const regionsList = useSelector((state:any) => state.regions.value)
  const victoryStats = useSelector((state:any) => state.victory.value)

  // Adjusting map when resizing
  const innerHeight = window.innerHeight - 110 
  const mapWidth = innerHeight * 1.33244343


  // Change color of regions to represent team ownership | Need to delay function for image to load  
  React.useEffect(() => {setTimeout(() => { handleRegionOwnership(regionsList) }, 1000) }, [regionsList])


  React.useEffect(() => {console.log("victoryStats", victoryStats)}, [victoryStats])
  
  return (
    <div className='overview'>
        <VictoryBar/>
        <Map height={innerHeight} width={mapWidth} setRegionId={setRegionId}/>
    </div>
  );
}

