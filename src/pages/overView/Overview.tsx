import * as React from 'react';
import VictoryBar from '../../components/victoryBar/VictoryBar';
import Map from "../../components/map/Map"


export interface IAppProps {
}


export default function Overview (props: IAppProps) {

  const [regionId, setRegionId] = React.useState<string>("")

  const innerHeight = window.innerHeight - 110 
  const mapWidth = innerHeight * 1.33244343
  
  return (
    <div className='overview'>
        <VictoryBar />
        <Map height={innerHeight} width={mapWidth} setRegionId={setRegionId}/>
    </div>
  );
}
