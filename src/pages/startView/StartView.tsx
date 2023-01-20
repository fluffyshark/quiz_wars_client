import * as React from 'react';

export interface IAppProps {
}

export default function StartView (props: IAppProps) {
  return (
    <div className='startView'>
      <div className="startView_title"><p>Quiz Wars</p></div>
      <div id='joinButton' className="startView_button"><p>Join</p></div>
      <div id='hostButton' className="startView_button"><p>Host</p></div>

    </div>
  );
}
