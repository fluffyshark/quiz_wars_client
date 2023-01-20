import * as React from 'react';
import Map from "../../components/map/Map"
import region01 from "../../images/regions/region01.png"

export interface IAppProps {
}

export default function RegionSelectView (props: IAppProps) {


  const innerHeight = window.innerHeight - 1; 
  const innerWidth = window.innerWidth;
  const mapWidth = innerHeight * 1.33244343;
  const statsWidth = innerWidth - mapWidth;


  React.useEffect(() => {
    (document.getElementById("mapComponent") as HTMLFormElement).style.height = "100vh";
    (document.getElementById("statsSection") as HTMLFormElement).style.width = `${statsWidth}px`;
  }, [])


  return (
    <div className='regionSelectView'>
      <Map height={innerHeight} width={mapWidth}/>
      <div id="statsSection" className="regionSelectView_stats">
        <div className="regionSelectView_stats_titleSection"><p>Quiz Wars</p></div>
        
        <div className="regionSelectView_stats_pointSection">
          <div className="regionSelectView_stats_pointSection_title"><p>Victory Points</p></div>
          <div className="regionSelectView_stats_pointSection_pointsContainer">
            <div id="regionSelectView_redTeam" className='pointBox'><p>10</p><p>Red Team</p></div>
            <div id="regionSelectView_blueTeam" className='pointBox'><p>10</p><p>Blue Team</p></div>
            <div id="regionSelectView_yellowTeam" className='pointBox'><p>10</p><p>Yellow Team</p></div>
            <div id="regionSelectView_greenTeam" className='pointBox'><p>10</p><p>Green Team</p></div>
          </div>
        </div>

        <div className="regionSelectView_stats_regionInfo">
          <div className="regionSelectView_stats_regionInfo_title">
            <p>Your points enters region</p>
            <p>Argonien</p>
          </div>
          <div className="regionSelectView_stats_regionInfo_regionImage"><img src={region01} alt="" /></div>
          <div className="regionSelectView_stats_regionInfo_regionPoints">
            <p>CONTROLLED BY</p>
            <p>Red Team</p>
            
            <p>POINTS IN REGION</p>
            <p>23</p>
            <div className='regionPoints_line'></div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
