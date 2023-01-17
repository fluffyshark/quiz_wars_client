import * as React from 'react';
import VictoryBar from '../../components/victoryBar/VictoryBar';
import Map from "../../components/map/Map"

export interface IAppProps {
}

export default function Overview (props: IAppProps) {
  return (
    <div className='overview'>
        <VictoryBar />
        <Map />
    </div>
  );
}
