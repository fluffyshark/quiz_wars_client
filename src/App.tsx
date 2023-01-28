import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
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


interface ServerToClientEvents {
  testing_from_server: (text:string) => void;

  // Template of types
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  testing_from_client: (text:string) => void;
}


function App() {

  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3001");
  
  // Emiting test message to server when loaded
  socket.emit("testing_from_client", "OK from client");

  useEffect(() => {
    // Receive message from server as response after sending "testing_from_client"
    socket.on("testing_from_server", (text) => {
      console.log("Message from Server to Client: ", text)
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
        <Route path="/hostlobby" element={<HostLobbyView />}></Route>  
        <Route path="/playerlobby" element={<PlayerLobbyView />}></Route>  
        <Route path="/join" element={<JoinView />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
