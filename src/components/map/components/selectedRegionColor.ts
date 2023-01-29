
// Change color for the region the user clicks on, color are marginally different from the user's team color 
export function selectedRegionColor(userData:any) {
    let regionColor = "#65e92b00"

    switch (userData.team) {
      case "Red": regionColor = "#bf2d00"; break;
      case "Blue": regionColor = "#2b2dfe"; break;
      case "Yellow": regionColor = "#ff6b00"; break;
      case "Green": regionColor = "#00c400"; break;
      case "No Team": regionColor = "#65e92b00"; break;
      default: console.log("selectedRegionColor failed")
    }
    return regionColor
  }