import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { select_region } from "../../redux/UserReducer"
import Map from "../../components/map/Map"
import regions from "../../images/RegionImageExport"
import region01 from "../../images/regions/region01.webp"

export interface IAppProps {
}

export default function RegionSelectView (props: IAppProps) {

  const [regionId, setRegionId] = useState<string>("mapID00")
  const [selectedRegion, setSelectedRegion] = useState({id: 0, name:"Forest's Edge", img: region01, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "none"})

  // Accessing RegionData from redux
  const regionsList = useSelector((state:any) => state.regions.value)
  const userData = useSelector((state:any) => state.user.value)
  const dispatch = useDispatch()

  // Valiables used to adjust map to viewport
  const innerHeight = window.innerHeight - 1; 
  const innerWidth = window.innerWidth;
  const mapWidth = innerHeight * 1.33244343;
  const statsWidth = innerWidth - mapWidth;



  useEffect(() => { addRegionData() }, [regionId])

 

  function addRegionData() {
    
    // Remove the first four letters, turning the last two digits of the string into number
    let regionNr = parseInt(regionId.substring(5)) 
    
    // Set selected region object as local state  
    setSelectedRegion(regionsList[regionNr])
    
    // Set selected region id in global user state
    dispatch(select_region({selectedRegionId: regionsList[regionNr].id}))
    
  } // End of addRegionData()





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
            <p>{selectedRegion.name}</p>
          </div>
          
          <div className="regionSelectView_stats_regionInfo_regionImage"><img src={selectedRegion.img} alt="" /></div>
          <div className="regionSelectView_stats_regionInfo_regionPoints">
            <p>CONTROLLED BY</p>
            <p>{selectedRegion.controlledBy}</p>
            
            <p>POINTS IN REGION</p>
            <p>23</p>
            <p>YOUR POINTS IN REGION</p>
            <p>0</p>
            <div className='regionPoints_line'></div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
