import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';
import icon_ok from "../../images/generall/icon_ok.png"
import icon_nope from "../../images/generall/icon_nope.png"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add_user_info } from "../../redux/UserReducer"


interface FormData {
    gameCodeInput: string;
    usernameInput: string;
  }

  interface SocketProps {
    socket: SocketIOClient.Socket;
  }


export default function JoinView ({socket}:SocketProps) {

    const [selectTeam, setSelectTeam] = React.useState<string>("");
    const [allGameCodes, setAllGameCodes] = React.useState<any>([])
    const [error, setError] = React.useState<string | null>(null);

    const [formData, setFormData] = React.useState<FormData>({
        gameCodeInput: '',
        usernameInput: '',
      });

      let navigate = useNavigate();
      const dispatch = useDispatch()


      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'gameCodeInput' && !/^\d*$/.test(value)) {
          setError('Input must contain only numbers, no spaces');
        } else if (!allGameCodes.includes(value)) {
          setError('Input must match one of the game codes in the list');
        } else {
          setError(null);
        }
      };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Declare user's starting region depending on the chosen team
      let teamStartingRegion = 0
        if (selectTeam === "Red") {teamStartingRegion = 38}
        if (selectTeam === "Blue") {teamStartingRegion = 67}
        if (selectTeam === "Yellow") {teamStartingRegion = 53}
        if (selectTeam === "Green") {teamStartingRegion = 0}
      // Send user data to client global store
      dispatch(add_user_info({username: formData.usernameInput, gameCode: formData.gameCodeInput, selectedRegionId: teamStartingRegion, team: selectTeam}))
      // User send user data to server to join room and be added to game data
      socket.emit("player_joining", {username: formData.usernameInput, gameCode: formData.gameCodeInput, team: selectTeam});
      // After giving socket and redux time to execute, user are sent to player lobby
      setTimeout(() => {navigate('/playerlobby')}, 1000)
      };

     


    // Only show join button if the following conditions are met: team selected, username not empty, gamecode 9 numbers, gamecode contains no spaces or letters
    function join_button_and_validation() {
      let tag = <></>
    
      if (selectTeam !== "" && formData.usernameInput !== "" && allGameCodes.includes(formData.gameCodeInput) && /^\d+$/.test(formData.gameCodeInput)) {
        console.log("VALIDATION OK")
        tag = (<button type="submit" id="joinGameBtn" className="joinView_container_box"><p>Join</p></button>)
      } else {
        tag = (<button disabled id="notReadyBtn" className="joinView_container_box"><p>Join</p></button>)
      }
    
      return tag
    }


    
    React.useEffect(() => {socket.emit("user_requesting_all_gamecodes")}, [])

    React.useEffect(() => {
      // Server sends all game codes to user (for gameCode validation purposes)
      socket.on("sending_user_gamecodes_request", (allGameCodes) => {
        // Setting allGameCodes to local state
        setAllGameCodes(allGameCodes)
        console.log("All game codes ", allGameCodes)
      })
  
    }, [socket])


    


  return (
    <div className='joinView'>
      
        <div className="joinView_title"><p>Quiz Wars</p></div>

        <div className="joinView_container">
            <form onSubmit={handleSubmit} className='joinView_container_form' action="">
                
                <p>Game Code</p>
                <div className="joinView_container_box">
                    <input type="text" name="gameCodeInput" value={formData.gameCodeInput} onChange={handleInputChange} />
                    {error && <p className='joinView_container_box_error'>{error}</p>}
                </div>


                <p>Name</p>
                <div className="joinView_container_box">
                    <input type="text" name="usernameInput" value={formData.usernameInput} onChange={handleInputChange} />
                </div>


                <p>Choose Team</p>
                <div onClick={() => setSelectTeam("Red")} className="joinView_container_box">
                  {selectTeam === "Red" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                    
                    <p>Red</p>
                </div>
                <div onClick={() => setSelectTeam("Blue")} className="joinView_container_box">
                  {selectTeam === "Blue" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                    <p>Blue</p>
                </div>
                <div onClick={() => setSelectTeam("Yellow")} className="joinView_container_box">
                  {selectTeam === "Yellow" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                    <p>Yellow</p>
                </div>
                <div onClick={() => setSelectTeam("Green")} className="joinView_container_box">
                  {selectTeam === "Green" ? (<img src={icon_ok} alt="" />) : (<img src={icon_nope} alt="" />)}
                    <p>Green</p>
                </div>
                
                {join_button_and_validation()}

            </form>
            
        </div>

    </div>
  );
}
