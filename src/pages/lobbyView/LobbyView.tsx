import * as React from 'react';

export interface IAppProps {
}

export default function LobbyView (props: IAppProps) {
  return (
    <div className='lobbyView'>
        
        <div className="lobbyView_title"><p>Quiz Wars</p></div>
        
        <div className="lobbyView_gameCode">
            <div className="lobbyView_gameCode_box"><p>Game Code</p><p>362 765 826</p></div>
        </div>

        <div className="lobbyView_teams">
            <div className="lobbyView_teams_box"><p>Red Team</p><p>10</p></div>
            <div className="lobbyView_teams_box"><p>Blue Team</p><p>10</p></div>
            <div className="lobbyView_teams_box"><p>Yellow Team</p><p>10</p></div>
            <div className="lobbyView_teams_box"><p>Green Team</p><p>10</p></div>
        </div>

        <div className="lobbyView_start"><div className="lobbyView_start_button"><p>Start Game</p></div></div>
    </div>
  );
}
