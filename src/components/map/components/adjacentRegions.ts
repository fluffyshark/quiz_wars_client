// Return true or false if clicked region are either: (1) controlled by user's team or (2) adjacent to any of the team's controlled regions 
export function canClickOnRegion(mapID:string, regionsList:any[], userData: { team: string }): boolean {
    
  let region_controlled_or_adjacent = false

  // Get array of regions controlled by user's team
  const getControlledRegions = getRegionsControlledByTeam(regionsList, userData)
  
  // If the regions controlled by user's team includes the clicked region, then return true
  if (getControlledRegions.includes(mapID)) {
    region_controlled_or_adjacent = true
    
  // else if clicked region is included among the adjacencies the team's controlled regions, then return true
  } else if (getAdjacentRegion(mapID, getControlledRegions)) {
    region_controlled_or_adjacent = true
  }
    
    return region_controlled_or_adjacent
}




  //Return true or false if clicked region is adjacant to an region already controlled by user's team 
  function getAdjacentRegion(mapID:string, getControlledRegions:string[]): boolean {
    let adjacent = false
    
    // Create an array that will be filled with all adjacent regions team controlled regions
    let allAdjacenciesForControlledRegions: string[] = [];

    // Filled the array with all adjacencies for controlled regions
    getControlledRegions.map((region:string) => {
      allAdjacenciesForControlledRegions.push(...adjacentRegions[region])
    })

    // If any of the controlled region's adjacencies inclued clicked region, then return true
    if (allAdjacenciesForControlledRegions.includes(mapID)) {
      adjacent = true
    }
   
    return adjacent
  }




  // Return array of all regions controlled by user's team
  function getRegionsControlledByTeam(regionsList: any[], userData: { team: string }): string[] {
    
    const redControlledRegionIds: string[] = [];
    
    // Fill the array with all regions controlled by user's team
    regionsList.forEach(region => {
      if (region.controlledBy === userData.team) {
        redControlledRegionIds.push(region.mapId);
      }
    });

    return redControlledRegionIds;
  }




  interface AdjacentRegions {
    [key: string]: string[];
  }

  const adjacentRegions: AdjacentRegions = {
    mapID00: ["mapID68","mapID02","mapID01"],
    mapID01: ["mapID00","mapID02","mapID04","mapID03"],
    mapID02: ["mapID00","mapID01","mapID68","mapID06","mapID04",""],
    mapID03: ["mapID01","mapID04","mapID08","mapID05"],
    mapID04: ["mapID01","mapID02","mapID03","mapID06","mapID07","mapID08"],
    mapID05: ["mapID03","mapID08","mapID09","mapID41"],
    mapID06: ["mapID02","mapID68","mapID07","mapID04"],
    mapID07: ["mapID06","mapID68","mapID11","mapID10","mapID08","mapID04"],
    mapID08: ["mapID03","mapID04","mapID07","mapID10","mapID09","mapID05"],
    mapID09: ["mapID05","mapID08","mapID10","mapID16","mapID51","mapID47","mapID43","mapID41"],
    mapID10: ["mapID08","mapID07","mapID11","mapID14","mapID16","mapID09"],

    mapID11: ["mapID07","mapID68","mapID12","mapID13","mapID14","mapID10"],
    mapID12: ["mapID68","mapID20","mapID13","mapID11"],
    mapID13: ["mapID11","mapID12","mapID20","mapID19","mapID15","mapID14"],
    mapID14: ["mapID10","mapID11","mapID13","mapID15","mapID16"],
    mapID15: ["mapID14","mapID13","mapID19","mapID18","mapID17","mapID16"],
    mapID16: ["mapID09","mapID10","mapID14","mapID15","mapID17","mapID51"],
    mapID17: ["mapID16","mapID15","mapID18","mapID23","mapID51"],
    mapID18: ["mapID15","mapID19","mapID22","mapID23","mapID17"],
    mapID19: ["mapID13","mapID20","mapID21","mapID22","mapID18","mapID15"],
    mapID20: ["mapID12","mapID13","mapID19","mapID21"],

    mapID21: ["mapID20","mapID19","mapID22","mapID64","mapID65"],
    mapID22: ["mapID19","mapID21","mapID65","mapID64","mapID60","mapID23","mapID18","mapID19"],
    mapID23: ["mapID17","mapID18","mapID22","mapID60","mapID24","mapID25","mapID51"],
    mapID24: ["mapID23","mapID60","mapID55","mapID25"],
    mapID25: ["mapID51","mapID23","mapID24","mapID55","mapID36","mapID30","mapID26"],
    mapID26: ["mapID49","mapID51","mapID25","mapID30","mapID27","mapID28"],
    mapID27: ["mapID28","mapID26","mapID30","mapID29"],
    mapID28: ["mapID54","mapID52","mapID50","mapID49","mapID26","mapID27","mapID29","mapID31"],
    mapID29: ["mapID28","mapID27","mapID30","mapID33","mapID32","mapID31"],
    mapID30: ["mapID29","mapID27","mapID26","mapID25","mapID36","mapID35","mapID33"],

    mapID31: ["mapID54","mapID28","mapID29","mapID32"],
    mapID32: ["mapID31","mapID29","mapID33"],
    mapID33: ["mapID32","mapID29","mapID30","mapID35","mapID34"],
    mapID34: ["mapID33","mapID35","mapID36","mapID40","mapID37"],
    mapID35: ["mapID33","mapID30","mapID36","mapID34"],
    mapID36: ["mapID30","mapID25","mapID55","mapID56","mapID40","mapID34","mapID35"],
    mapID37: ["mapID34","mapID40","mapID39","mapID38"],
    mapID38: ["mapID37","mapID39"],
    mapID39: ["mapID38","mapID37","mapID40","mapID57"],
    mapID40: ["mapID36","mapID56","mapID57","mapID39","mapID37","mapID34"],

    mapID41: ["mapID05","mapID09","mapID43","mapID42"],
    mapID42: ["mapID41","mapID43","mapID44","mapID66"],
    mapID43: ["mapID42","mapID41","mapID09","mapID47","mapID48","mapID44"],
    mapID44: ["mapID42","mapID66","mapID43","mapID48","mapID50","mapID45"],
    mapID45: ["mapID66","mapID44","mapID50","mapID52"],
    mapID46: ["mapID66","mapID45","mapID52","mapID53"],
    mapID47: ["mapID43","mapID09","mapID51","mapID48"],
    mapID48: ["mapID44","mapID43","mapID47","mapID51","mapID49","mapID50"],
    mapID49: ["mapID50","mapID58","mapID51","mapID26","mapID28"],
    mapID50: ["mapID45","mapID44","mapID48","mapID49","mapID28","mapID52"],

    mapID51: ["mapID49","mapID48","mapID47","mapID09","mapID16","mapID17","mapID25","mapID26"],
    mapID52: ["mapID46","mapID45","mapID50","mapID28","mapID54","mapID53"],
    mapID53: ["mapID46","mapID52","mapID54"],
    mapID54: ["mapID53","mapID52","mapID28","mapID31"],
    mapID55: ["mapID25","mapID24","mapID58","mapID56","mapID36"],
    mapID56: ["mapID55","mapID58","mapID57","mapID40","mapID36"],
    mapID57: ["mapID56","mapID58","mapID59","mapID39","mapID40"],
    mapID58: ["mapID55","mapID60","mapID61","mapID59","mapID57","mapID56"],
    mapID59: ["mapID58","mapID61","mapID57"],
    mapID60: ["mapID23","mapID22","mapID64","mapID61","mapID58","mapID24"],

    mapID61: ["mapID58","mapID60","mapID64","mapID59"],
    mapID62: ["mapID63","mapID67","mapID61"],
    mapID63: ["mapID65","mapID67","mapID62","mapID61","mapID64"],
    mapID64: ["mapID60","mapID22","mapID21","mapID65","mapID63","mapID61"],
    mapID65: ["mapID21","mapID63","mapID64"],
    mapID66: ["mapID42","mapID44","mapID45","mapID46"],
    mapID67: ["mapID62","mapID63"],
    mapID68: ["mapID02","mapID06","mapID07","mapID11","mapID12"],
  }