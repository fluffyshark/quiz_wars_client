import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IAppProps {

}


export default function StartView (props: IAppProps) {

  return (
    <div className='startView'>
      <div className="startView_title"><p>Quiz Wars</p></div>
      <Link style={{ textDecoration: 'none' }} to="/join"> <div id='joinButton' className="startView_button"><p>Join</p></div></Link>
      <Link style={{ textDecoration: 'none' }} to="/gameselect"><div id='hostButton' className="startView_button"><p>Host</p></div></Link>

    </div>
  );
}
