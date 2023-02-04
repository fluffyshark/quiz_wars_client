interface CalcVictoryPoints {
    red: number 
    blue: number
    yellow: number
    green: number
  }

  
  export function calcVictoryPoints(regionsList: any, victoryPoints:{red:number, blue:number, yellow:number, green:number}): CalcVictoryPoints {
    let accumulatedPoints = victoryPoints;
  
    regionsList.map((region: any) => {
      if (region.controlledBy === "Red") {accumulatedPoints.red += 1}
      if (region.controlledBy === "Blue") {accumulatedPoints.blue += 1}
      if (region.controlledBy === "Yellow") {accumulatedPoints.yellow += 1}
      if (region.controlledBy === "Green") {accumulatedPoints.green += 1}
    });
    return accumulatedPoints;
  }

