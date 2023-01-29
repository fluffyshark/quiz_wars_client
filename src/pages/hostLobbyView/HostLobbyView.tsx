import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add_user_info } from "../../redux/UserReducer"

interface SocketProps {
  socket: SocketIOClient.Socket;
}

export default function HostLobbyView ({socket}:SocketProps) {

  const [displayCode, setDisplayCode] = React.useState<string>("Code Loading")

  const dispatch = useDispatch()
  const userData = useSelector((state:any) => state.user.value)

  function hostGame() {

      // Generate random number, that will be the gameCode (now called hostCode)
      const hostCode = Math.floor(Math.random() * 999999999);

      // Turn number into array
      let myFunc = (num: string) => parseInt(num);
      let intArr = Array.from(String(hostCode), myFunc) as any[];
      
      // Add space between numbers
      intArr.splice(3, 0, " ");
      intArr.splice(7, 0, " ");

      // Turn array into string
      const displayCode = intArr.join('');
      setDisplayCode(displayCode)
  
      // Host also need to join the same socket.io room to communicate with players in the room
      socket.emit("join_room", String(hostCode));
  
      // Send host data to redux
      dispatch(add_user_info({username: "HOST", gameCode: hostCode}))
    }


    React.useEffect(() => { hostGame() }, [])



  return (
    <div className='hostLobbyView'>
        
        <div className="hostLobbyView_title"><p>Quiz Wars</p></div>
        
        <div className="hostLobbyView_gameCode">
            <div className="hostLobbyView_gameCode_box"><p>Game Code</p><p>{displayCode}</p></div>
        </div>

        <div className="hostLobbyView_teams">
            <div className="hostLobbyView_teams_box"><p>Red Team</p><p>0</p></div>
            <div className="hostLobbyView_teams_box"><p>Blue Team</p><p>0</p></div>
            <div className="hostLobbyView_teams_box"><p>Yellow Team</p><p>0</p></div>
            <div className="hostLobbyView_teams_box"><p>Green Team</p><p>0</p></div>
        </div>

        <Link style={{ textDecoration: 'none' }} to="/overview">
          <div className="hostLobbyView_start"><div className="hostLobbyView_start_button"><p>Start Game</p></div></div>
        </Link>
    </div>
  );
}
