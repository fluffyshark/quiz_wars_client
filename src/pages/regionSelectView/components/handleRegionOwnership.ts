  // Change color of regions to represent team ownership
  interface Region {
    controlledBy: "Red" | "Blue" | "Yellow" | "Green" | "No Team";
    mapId: string
  }
  
  export function handleRegionOwnership(regionsList:any) {
    regionsList.map((region: Region, i: number) => {
      switch (region.controlledBy) {
        case "Red": 
          (document.getElementById(region.mapId) as HTMLFormElement).style.fill = "#f35c81";
          break;
        case "Blue": 
          (document.getElementById(region.mapId) as HTMLFormElement).style.fill = "#1cb8ff";
          break;
        case "Yellow": 
          (document.getElementById(region.mapId) as HTMLFormElement).style.fill = "#ff9b47";
          break;
        case "Green": 
          (document.getElementById(region.mapId) as HTMLFormElement).style.fill = "#65e92b";
          break;
        case "No Team": 
          (document.getElementById(region.mapId) as HTMLFormElement).style.fill = "#65e92b00";
          break;
        default: console.log("handleRegionOwnership failed")
      }
    });
}