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



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartView/>}></Route> 
        <Route path="/gameselect" element={<GameSelect />}></Route> 
        <Route path="/overview" element={<Overview />}></Route>  
        <Route path="/regionselect" element={<RegionSelectView />}></Route> 
        <Route path="/quizview" element={<QuizView />}></Route>  
        <Route path="/mathview" element={<MathView />}></Route>  
        <Route path="/hostlobby" element={<HostLobbyView />}></Route>  
        <Route path="/playerlobby" element={<PlayerLobbyView />}></Route>  
        <Route path="/join" element={<JoinView />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
