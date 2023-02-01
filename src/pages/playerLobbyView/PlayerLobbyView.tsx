import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';
import icon_ok from "../../images/generall/icon_ok.png"
import icon_nope from "../../images/generall/icon_nope.png"
import { useNavigate } from 'react-router-dom';

interface SocketProps {
    socket: SocketIOClient.Socket;
  }

export default function PlayerLobbyView ({socket}:SocketProps) {

    let navigate = useNavigate();


    React.useEffect(() => {
        // When host start game, then user are navigated to MathView
        socket.on("host_has_started_game", () => {
            navigate('/mathview')
            console.log("GAME STARTED")
          })
    }, [socket])

    
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
