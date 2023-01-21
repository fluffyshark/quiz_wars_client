import * as React from 'react';

export interface IAppProps {
}

export default function hostLobbyView (props: IAppProps) {
  return (
    <div className='hostLobbyView'>
        
        <div className="hostLobbyView_title"><p>Quiz Wars</p></div>
        
        <div className="hostLobbyView_gameCode">
            <div className="hostLobbyView_gameCode_box"><p>Game Code</p><p>362 765 826</p></div>
        </div>

        <div className="hostLobbyView_teams">
            <div className="hostLobbyView_teams_box"><p>Red Team</p><p>10</p></div>
            <div className="hostLobbyView_teams_box"><p>Blue Team</p><p>10</p></div>
            <div className="hostLobbyView_teams_box"><p>Yellow Team</p><p>10</p></div>
            <div className="hostLobbyView_teams_box"><p>Green Team</p><p>10</p></div>
        </div>

        <div className="hostLobbyView_start"><div className="hostLobbyView_start_button"><p>Start Game</p></div></div>
    </div>
  );
}
