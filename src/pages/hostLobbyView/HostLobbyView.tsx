import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add_user_info } from "../../redux/UserReducer"
import { setGameStatus } from '../../redux/VictoryReducer';

interface SocketProps {
  socket: SocketIOClient.Socket;
}



export default function HostLobbyView ({socket}:SocketProps) {
  
  const [endGameTimer, setEndGameTimer] = React.useState<number>(20)
  const [displayCode, setDisplayCode] = React.useState<string>("Code Loading")
  const [gameCode, setGameCode] = React.useState<string>()
  const [team_red, setTeam_red] = React.useState<string[]>([])
  const [team_blue, setTeam_blue] = React.useState<string[]>([])
  const [team_yellow, setTeam_yellow] = React.useState<string[]>([])
  const [team_green, setTeam_green] = React.useState<string[]>([])

  const dispatch = useDispatch()
  let navigate = useNavigate();
  const mathData = useSelector((state:any) => state.math.value)


  function hostGame() {

    // Generate random number that will be the gameCode (now called hostCode), the number will also be the socket room.
    const hostCode = Math.floor(Math.random() * 999999999);
     
    // Turn hostCode into string and place it in local state, to be used in other function like hostStartGame()
    setGameCode(String(hostCode))

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
    socket.emit("host_create_room", {gameCode: String(hostCode), gameType: mathData.type});

    // Send host data to redux
    dispatch(add_user_info({username: "HOST", gameCode: String(hostCode), selectedRegionId:0, team: ""}))
 
    }


    React.useEffect(() => {

      // Adding user to their chosen team
      socket.on("player_accepted", (userData) => {
        switch (userData.team) {
          case "Red": setTeam_red(team_red => [...team_red, userData.username]); break;
          case "Blue": setTeam_blue(team_blue =>[...team_blue, userData.username]); break;
          case "Yellow": setTeam_yellow(team_yellow =>[...team_yellow, userData.username]); break;
          case "Green": setTeam_green(team_green =>[...team_green, userData.username]); break;
          default:
            break;
        } 
      }) 

      // When user change team, two things happens: (1) user are filtered away bases on its username and (2) their username are added again in the new team
      socket.on("from_server_user_changed_team", (userData) => {
 
        setTeam_red(team_red => team_red.filter(user => user !== userData.username))
        setTeam_blue(team_blue => team_blue.filter(user => user !== userData.username))
        setTeam_yellow(team_yellow => team_yellow.filter(user => user !== userData.username))
        setTeam_green(team_green => team_green.filter(user => user !== userData.username))

        switch (userData.team) {
          case "Red": setTeam_red(team_red => [...team_red, userData.username]); break;
          case "Blue": setTeam_blue(team_blue =>[...team_blue, userData.username]); break;
          case "Yellow": setTeam_yellow(team_yellow =>[...team_yellow, userData.username]); break;
          case "Green": setTeam_green(team_green =>[...team_green, userData.username]); break;
          default:
            break;
        }
      });
      
    }, [socket]);




    React.useEffect(() => {
      hostGame()
    }, [])


    
    function hostStartGame() {
      // Send game play time to global store
      dispatch(setGameStatus({gamePlayTime:endGameTimer}))
      // Use socket to send to all users that the game are starting, sending game code to use so that only users in current game (room) are affected
      socket.emit("host_starting_game", gameCode);
      // After one second host leave lobby to navigate to overView, time delay is for giving socket.io enough time to execute
      setTimeout(() => {navigate('/overview')}, 1000)
    }



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEndGameTimer(parseInt(event.target.value));
    };


    React.useEffect(() => {
      console.log(endGameTimer)
    })


  return (
    <div className='hostLobbyView'>
        
        <div className="hostLobbyView_title"><p>Quiz Wars</p></div>
        
        <div className="hostLobbyView_gameCode">
            <div className="hostLobbyView_gameCode_box"><p>Game Code</p><p>{displayCode}</p></div>
        </div>

        <div className="hostLobbyView_endGameTimer"><p>End game in</p><input type="text" value={endGameTimer} onChange={handleInputChange} /><p>minutes</p></div>

        <div className="hostLobbyView_teams">
            <div className="hostLobbyView_teams_box"><p>Red Team</p><p>{team_red.length}</p></div>
            <div className="hostLobbyView_teams_box"><p>Blue Team</p><p>{team_blue.length}</p></div>
            <div className="hostLobbyView_teams_box"><p>Yellow Team</p><p>{team_yellow.length}</p></div>
            <div className="hostLobbyView_teams_box"><p>Green Team</p><p>{team_green.length}</p></div>
        </div>

        <Link style={{ textDecoration: 'none' }} to="/overview">
          <div onClick={() => {hostStartGame()}} className="hostLobbyView_start"><div className="hostLobbyView_start_button"><p>Start Game</p></div></div>
        </Link>
    </div>
  );
}
