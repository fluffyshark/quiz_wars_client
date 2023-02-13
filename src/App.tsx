import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { updateRegionData } from "./redux/RegionReducer"
import "./styles/styles.css"
import Overview from './pages/overView/Overview';
import RegionSelectView from './pages/regionSelectView/RegionSelectView';
import QuizView from './pages/quizView/QuizView';
import MathView from './pages/mathView/MathView';
import StartView from './pages/startView/StartView';
import GameSelect from './pages/gameSelect/GameSelect';
import JoinView from './pages/joinView/JoinView';
import HostLobbyView from './pages/hostLobbyView/HostLobbyView';
import PlayerLobbyView from './pages/playerLobbyView/PlayerLobbyView';
import { useDispatch } from "react-redux";



interface ServerToClientEvents {
  testing_from_server: (text:string) => void;
  send_gamedata_to_users: (gameData:any, gameCode:number) => void;
  sending_user_gamecodes_request:  (allGameCodes:any) => void;
  

  // Template of types
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  testing_from_client: (text:string) => void;
}



function App() {

  const dispatch = useDispatch()
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("https://quiz-wars-server.onrender.com/");
//  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3001");
 

  useEffect(() => {
    
    // Receive message from server as response after sending "testing_from_client"
    socket.on("send_gamedata_to_users", (gameData, gameCode) => {
      // Send updated version gameData of RegionReducer 
      dispatch(updateRegionData(gameData))
      console.log("Client GameData ", gameData)
    })


  }, [socket])



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartView/>}></Route> 
        <Route path="/gameselect" element={<GameSelect />}></Route> 
        <Route path="/overview" element={<Overview />}></Route>  
        <Route path="/regionselect" element={<RegionSelectView />}></Route> 
        <Route path="/quizview" element={<QuizView />}></Route>  
        <Route path="/mathview" element={<MathView socket={socket} />}></Route>  
        <Route path="/hostlobby" element={<HostLobbyView socket={socket} />}></Route>  
        <Route path="/playerlobby" element={<PlayerLobbyView socket={socket}/>}></Route>  
        <Route path="/join" element={<JoinView socket={socket} />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
