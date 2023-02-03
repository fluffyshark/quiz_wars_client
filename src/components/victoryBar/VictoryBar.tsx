import * as React from 'react';

import CountDownTimer from "../countDownTimer/countDownTimer"

export interface IAppProps {
}

export default function VictoryBar (props: IAppProps) {

  
  

  return (
    <div className='victoryBar'>
        <div className="victoryBarTitleRow"><p>Victory Points</p></div>
        <div className="victoryBarStatsRow">
            <div id="redTeamBar" className="victoryBarStatsRow_teamSection"><p>0</p></div>
            <div id="blueTeamBar" className="victoryBarStatsRow_teamSection"><p>0</p></div>
            <div className="victoryBarStatsRow_timer">{CountDownTimer()}</div>
            <div id="yellowTeamBar" className="victoryBarStatsRow_teamSection"><p>0</p></div>
            <div id="greenTeamBar" className="victoryBarStatsRow_teamSection"><p>0</p></div>
        </div>
    </div>
  );
}
