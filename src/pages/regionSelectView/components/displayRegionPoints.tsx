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
      <p>{regionList[selectedRegionID].points_red}</p>
      <p>{regionList[selectedRegionID].points_blue}</p>
      <p>{regionList[selectedRegionID].points_yellow}</p>
      <p>{regionList[selectedRegionID].points_green}</p>
    </>
  );

  return tag;
}