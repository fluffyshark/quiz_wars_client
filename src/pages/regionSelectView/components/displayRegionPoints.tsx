import * as React from 'react';

interface Region {
  points_red: number,
  points_blue: number,
  points_yellow: number,
  points_green: number
}

export function displayRegionPoints(selectedRegionID: number, regionList: Region[]) {
  let tag = (
    <>
      <p id="regionSelectView_team_point_red">{regionList[selectedRegionID].points_red}</p>
      <p id="regionSelectView_team_point_blue">{regionList[selectedRegionID].points_blue}</p>
      <p id="regionSelectView_team_point_yellow">{regionList[selectedRegionID].points_yellow}</p>
      <p id="regionSelectView_team_point_green">{regionList[selectedRegionID].points_green}</p>
    </>
  );

  return tag;
}