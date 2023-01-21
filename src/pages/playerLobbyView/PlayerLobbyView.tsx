import * as React from 'react';
import icon_ok from "../../images/generall/icon_ok.png"
import icon_nope from "../../images/generall/icon_nope.png"

export interface IAppProps {
}

export default function PlayerLobbyView (props: IAppProps) {
  return (
    <div className='playerLobbyView'>

        <div className="playerLobbyView_title"><p>Quiz Wars</p></div>

        <div className="playerLobbyView_container">
            <p>Your Team Is</p>
            <p id="playerLobbyView_selectedTeam">Red</p>

            <p>Choose Team</p>
            <div className="playerLobbyView_container_box">
                <img src={icon_ok} alt="" />
                <p>Red</p>
            </div>
            <div className="playerLobbyView_container_box">
                <img src={icon_nope} alt="" />
                <p>Blue</p>
            </div>
            <div className="playerLobbyView_container_box">
                <img src={icon_nope} alt="" />
                <p>Yellow</p>
            </div>
            <div className="playerLobbyView_container_box">
                <img src={icon_nope} alt="" />
                <p>Green</p>
            </div>

        </div>
    </div>
  );
}
