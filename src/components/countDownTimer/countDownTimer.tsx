import * as React from 'react';

export default function CountDownTimer (setVictoryPoints:any) {
  
  const [countDown, setCountDown] = React.useState<number>(60);


  React.useEffect(() => {
    const interval = setInterval(function() {
      setCountDown((prevCountDown) => {
        const newCountDown = prevCountDown - 1;
        if (newCountDown < 1) {
          
          setVictoryPoints(true)

          return 60;
        }
        return newCountDown;
      });
    }, 1000);

    return () => clearInterval(interval);

  }, []);
  

  return <p>{countDown}</p>;
}

