import * as React from 'react';

export interface IAppProps {
}

export default function UserVictoryPoints (props: IAppProps) {
  return (
            <>
                <div className="regionSelectView_stats_pointSection_title"><p>Victory Points</p></div>
                <div className="regionSelectView_stats_pointSection_pointsContainer">
                    <div id="regionSelectView_redTeam" className='pointBox'><p>10</p><p>Red Team</p></div>
                    <div id="regionSelectView_blueTeam" className='pointBox'><p>10</p><p>Blue Team</p></div>
                    <div id="regionSelectView_yellowTeam" className='pointBox'><p>10</p><p>Yellow Team</p></div>
                    <div id="regionSelectView_greenTeam" className='pointBox'><p>10</p><p>Green Team</p></div>
                </div>
            </>
  );
}
