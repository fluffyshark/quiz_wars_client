import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { updateGameStatus } from '../../redux/VictoryReducer';

interface ChildComponentProps {
  setDisplayVictoryPoints: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountDownTimer: React.FC<ChildComponentProps> = ({ setDisplayVictoryPoints }) => {
  
  const [secondsCountDown, setSecondsCountDown] = React.useState<number>(10);
  const [minutesCountDown, setMinutesCountDown] = React.useState<number>(10);
  const [isTimerRunning, setIsTimerRunning] = React.useState<boolean>(true);

  const dispatch = useDispatch()
  const victoryStats = useSelector((state:any) => state.victory.value)

  React.useEffect(() => {
    setMinutesCountDown(victoryStats.gamePlayTime)
  }, [])

  React.useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(function() {
        setSecondsCountDown((prevCountDown) => {
          const newCountDown = prevCountDown - 1;
          if (newCountDown < 1) {
            
            return 60;
          }
    
          return newCountDown;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }

  }, [isTimerRunning]);

  
  
  React.useEffect(() => {
    if (secondsCountDown === 1) {
      setTimeout(function() {
        setMinutesCountDown(minutesCountDown - 1)
        setDisplayVictoryPoints(true)
      }, 1000);
    }
    if (minutesCountDown === 0) {
      dispatch(updateGameStatus({gameStatus:"end_game"}))
      setIsTimerRunning(false);
    }
  }, [secondsCountDown])
  

  return (
    <>
      <p>{minutesCountDown}</p>
      <p>{secondsCountDown}</p>
    </>
  )
    

}

export default CountDownTimer;