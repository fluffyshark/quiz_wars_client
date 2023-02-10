import * as React from 'react';

interface VictoryStats {
    victoryStats: any;
  }

export default function ShowVictor ({victoryStats}:VictoryStats) {


    function calculateVictor(): string {
        let highestKey = "Red";
        let highestValue = victoryStats.red;
      
        if (victoryStats.blue > highestValue) {
          highestKey = "Blue";
          highestValue = victoryStats.blue;
        }
        if (victoryStats.yellow > highestValue) {
          highestKey = "Yellow";
          highestValue = victoryStats.yellow;
        }
        if (victoryStats.green > highestValue) {
          highestKey = "Green";
          highestValue = victoryStats.green;
        }
      
        return highestKey;
      }


  return (
    <div className='victorView'>
        <div className="victorView_container">
          <p>Victory</p>
          <p>{calculateVictor()}</p>
        </div>
      </div>
  );
}
