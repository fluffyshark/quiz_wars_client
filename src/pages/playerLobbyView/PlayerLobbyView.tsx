import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';
import icon_ok from "../../images/generall/icon_ok.png"
import icon_nope from "../../images/generall/icon_nope.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { change_team } from "../../redux/UserReducer"


interface SocketProps {
    socket: SocketIOClient.Socket;
  }

export default function PlayerLobbyView ({socket}:SocketProps) {
    
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const userData = useSelector((state:any) => state.user.value)

    const [selectTeam, setSelectTeam] = React.useState<string>(userData.team);

    
    
    function changeTeam(team:string) {
        setSelectTeam(team)
        socket.emit("user_changing_team", {username: userData.username, gameCode: userData.gameCode, team:team, previousTeam: userData.team});
        dispatch(change_team({team: team}))
        
    }


    React.useEffect(() => {
        // When host start game, then user are navigated to MathView
        socket.on("host_has_started_game", (gameCode) => {
            console.log("CLIENT LOBBY HAS REVEICED ORDER TO START GAME")
            navigate('/mathview')
            console.log("GAME STARTED")
          })

    }, [socket])

    

  return (
    <div className='playerLobbyView'>

        <div className="playerLobbyView_title"><p>Quiz Wars</p></div>

        <div className="playerLobbyView_container">
            <p>Your Team Is</p>
            <p id="playerLobbyView_selectedTeam">{userData.team}</p>

            <p>Choose Team</p>
            <div onClick={() => changeTeam("Red")} className="playerLobbyView_container_box">
                {selectTeam === "Red" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                <p>Red</p>
            </div>
            <div onClick={() => changeTeam("Blue")} className="playerLobbyView_container_box">
                {selectTeam === "Blue" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                <p>Blue</p>
            </div>
            <div onClick={() => changeTeam("Yellow")} className="playerLobbyView_container_box">
                {selectTeam === "Yellow" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                <p>Yellow</p>
            </div>
            <div onClick={() => changeTeam("Green")} className="playerLobbyView_container_box">
                {selectTeam === "Green" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                <p>Green</p>
            </div>

        </div>
    </div>
  );
}
