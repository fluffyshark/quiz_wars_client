
// Change color back to the previous color before user click on region
export function prevRegionColor(id: string, regionsList:any): string {
    let regionColor = "#65e92b00"
    const regionNr = parseInt(id.substring(5));

    switch (regionsList[regionNr].controlledBy) {
      case "Red": regionColor = "#f35c81"; break;
      case "Blue": regionColor = "#1cb8ff"; break;
      case "Yellow": regionColor = "#ff9b47"; break;
      case "Green": regionColor = "#65e92b"; break;
      case "No Team": regionColor = "#65e92b00"; break;
      default: console.log("prevRegionColor failed")
    }
    return regionColor
  }