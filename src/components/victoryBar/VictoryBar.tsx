import * as React from 'react';
import { useSelector } from 'react-redux';

import CountDownTimer from "../countDownTimer/countDownTimer"
import { calcVictoryPoints } from './components/calcVictoryPoints';



export default function VictoryBar () {

  const [displayVictoryPoints, setDisplayVictoryPoints] = React.useState<boolean>(false)
  const [victoryPoints, setVictoryPoints] = React.useState<{red:number, blue:number, yellow:number, green:number}>({red: 0, blue: 0, yellow: 0, green: 0})

  const regionsList = useSelector((state:any) => state.regions.value)
  

  React.useEffect(() => {
    if (displayVictoryPoints === true) {
      console.log("inside if statement")
      setVictoryPoints(calcVictoryPoints(regionsList, victoryPoints))
      setDisplayVictoryPoints(false)
    }
    console.log("Outside if statement")
  }, [displayVictoryPoints])


  React.useEffect(() => {
    console.log("victory:", displayVictoryPoints)
  }) 

  return (
    <div className='victoryBar'>
        <div className="victoryBarTitleRow"><p>Victory Points</p></div>
        <div className="victoryBarStatsRow">
            <div id="redTeamBar" className="victoryBarStatsRow_teamSection"><p>{victoryPoints.red}</p></div>
            <div id="blueTeamBar" className="victoryBarStatsRow_teamSection"><p>{victoryPoints.blue}</p></div>
            <div className="victoryBarStatsRow_timer">{CountDownTimer(setDisplayVictoryPoints)}</div>
            <div id="yellowTeamBar" className="victoryBarStatsRow_teamSection"><p>{victoryPoints.yellow}</p></div>
            <div id="greenTeamBar" className="victoryBarStatsRow_teamSection"><p>{victoryPoints.green}</p></div>
        </div>
    </div>
  );
}
