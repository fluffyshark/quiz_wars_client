import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux/es/exports';
import Map from "../../components/map/Map"
import regions from "../../images/RegionImageExport"

export interface IAppProps {
}

export default function RegionSelectView (props: IAppProps) {

  const [regionId, setRegionId] = useState<string>("")
  const [selectedRegion, setSelectedRegion] = useState({})

  // TESTING REDUX
  const regionsList = useSelector((state:any) => state.regions.value)

  const innerHeight = window.innerHeight - 1; 
  const innerWidth = window.innerWidth;
  const mapWidth = innerHeight * 1.33244343;
  const statsWidth = innerWidth - mapWidth;

  useEffect(() => {
    addRegionData()
    console.log(regionsList)
  }, [regionId])

 
  function addRegionData() {
    // Remove the first four letters, turning the last two digits of the string into number
    const regionNr = parseInt(regionId.substring(5)) 

    console.log(regionNr)

    
  }
  

  useEffect(() => {
    (document.getElementById("mapComponent") as HTMLFormElement).style.height = "100vh";
    (document.getElementById("statsSection") as HTMLFormElement).style.width = `${statsWidth}px`;
  }, [])


  return (
    <div className='regionSelectView'>
      <Map height={innerHeight} width={mapWidth} setRegionId={setRegionId}/>
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

          <div className="regionSelectView_stats_regionInfo_regionImage"><img src={regionsList[0].img} alt="" /></div>
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
