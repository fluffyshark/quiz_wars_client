import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { select_region } from "../../redux/UserReducer"
import Map from "../../components/map/Map"
import region01 from "../../images/regions/region01.webp"
import icon_toMath from "../../images/generall/icon_toMath.png"
import { Link } from 'react-router-dom';

import { handleRegionOwnership } from './components/handleRegionOwnership';
import UserVictoryPoints from './components/UserVictoryPoints';

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
  

  // Take in the id of user's selected region that is placed local state. Display the teams points based on that region's points stored in global state (RegionReducer) 
  function displayRegionPoints(selectedRegionID: number) {
    let tag = <>
                <p>{regionsList[selectedRegionID].points_red}</p>
                <p>{regionsList[selectedRegionID].points_blue}</p>
                <p>{regionsList[selectedRegionID].points_yellow}</p>
                <p>{regionsList[selectedRegionID].points_green}</p>
              </>

    return tag
  }



  return (
    <div className='regionSelectView'>
      <Map height={innerHeight} width={mapWidth} setRegionId={setRegionId}/>
      <div id="statsSection" className="regionSelectView_stats">
        <div className="regionSelectView_stats_titleSection">
          <Link to="/mathview"><img src={icon_toMath} alt="" /></Link>
          <p>Quiz Wars</p>
        </div>
         
        <div className="regionSelectView_stats_pointSection">
           <UserVictoryPoints />
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
            <div className="regionSelectView_stats_regionInfo_regionPointsContainer">
              {displayRegionPoints(selectedRegion.id)}
            </div>
            <p>YOUR POINTS IN REGION</p>
            <p>{selectedRegion.your_points}</p>
            <div className='regionPoints_line'></div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
