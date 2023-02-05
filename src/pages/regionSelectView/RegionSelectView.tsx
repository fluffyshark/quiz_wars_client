import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { select_region } from "../../redux/UserReducer"
import Map from "../../components/map/Map"
import region01 from "../../images/regions/region01.webp"
import icon_toMath from "../../images/generall/icon_toMath.png"
import { Link } from 'react-router-dom';

import { handleRegionOwnership } from './components/handleRegionOwnership';
import UserVictoryPoints from './components/UserVictoryPoints';
import { displayRegionPoints } from "./components/displayRegionPoints"

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
  const innerWidth = window.innerWidth - 1;
  let mapHeight =  innerHeight;
  let mapWidth = innerHeight * 1.33244343;
  const statsWidth = innerWidth - mapWidth;

  // If tablet, where height is greater than width
  if (innerHeight > innerWidth) {
    mapWidth = innerWidth
    mapHeight = mapWidth * 0.75
  }


  useEffect(() => { addRegionData() }, [regionId])

  // When user enters view, sets user's selected region to previous selected region, saved in RegionReducer(redux) 
  useEffect(() => {
    setSelectedRegion(regionsList[userData.selectedRegionId])
    setRegionId(regionsList[userData.selectedRegionId].mapId)
  }, [])
 


  function addRegionData() {
    
    // Remove the first four letters, turning the last two digits of the string into number
    let regionNr = parseInt(regionId.substring(5)) 
    
    // Set selected region object as local state  
    setSelectedRegion(regionsList[regionNr])
    
    // Set selected region id in global user state (UserReducer)
    dispatch(select_region({selectedRegionId: regionsList[regionNr].id}))
    
  } // End of addRegionData()



  useEffect(() => {
    (document.getElementById("mapComponent") as HTMLFormElement).style.height = "100vh";
    (document.getElementById("statsSection") as HTMLFormElement).style.width = `${statsWidth}px`;
  }, [])



  useEffect(() => {
    console.log("regionsList", regionsList)

    // Change color of regions to represent team ownership | Need to delay function for image to load  
    setTimeout(() => { handleRegionOwnership(regionsList) }, 1000)

  }, [regionsList])
  


  return (
    <div className='regionSelectView'>
      <Map height={mapHeight} width={mapWidth} setRegionId={setRegionId}/>
      <div id="statsSection" className="regionSelectView_stats">
        <div className="regionSelectView_stats_titleSection">
          <Link id="regionSelectView_linkButton_landscape" to="/mathview"><img src={icon_toMath} alt="" /></Link>
          <p>Quiz Wars</p>
        </div>
         
        <div className="regionSelectView_stats_pointSection">
           <UserVictoryPoints />
        </div>  
      
        <div className="regionSelectView_stats_regionInfo">
          
          <div id="title_region_container">
            <div className="regionSelectView_stats_regionInfo_title">
              <p>Your points enters region</p>
              <p>{selectedRegion.name}</p>
            </div>
            <div className="regionSelectView_stats_regionInfo_regionImage"><img src={selectedRegion.img} alt="" /></div>
          </div>
          
          <div className="regionSelectView_stats_regionInfo_regionPoints">
            
            <Link to="/mathview"><img id="regionSelectView_linkButton_portrait" src={icon_toMath} alt="" /></Link>
            
            <div className="regionSelectView_stats_regionInfo_regionPoints_controlledby">
              <p>CONTROLLED BY</p>
              <p>{selectedRegion.controlledBy}</p>
            </div>
            
            <div className="regionSelectView_stats_regionInfo_regionPointsContainer">
              <p id="regionSelectView_team_point_title">POINTS IN REGION</p>
              <div id="regionSelectView_regionPoints">
                {displayRegionPoints(selectedRegion.id, regionsList)}
              </div>
            </div>
            <div className="regionSelectView_stats_regionInfo_regionPoints_yourPoints">
              <p>YOUR POINTS IN REGION</p>
              <p>{selectedRegion.your_points}</p>
            </div>
        
            <div className='regionPoints_line'></div>

          </div>
        </div>
      
      </div>
    </div>
  );
}
