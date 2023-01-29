import * as React from 'react';
import icon_ok from "../../images/generall/icon_ok.png"
import icon_nope from "../../images/generall/icon_nope.png"
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export default function JoinView (props: IAppProps) {
  return (
    <div className='joinView'>
      
        <div className="joinView_title"><p>Quiz Wars</p></div>

        <div className="joinView_container">
            <form className='joinView_container_form' action="">
                
                <p>Game Code</p>
                <div className="joinView_container_box">
                    <input type="text" />
                </div>


                <p>Name</p>
                <div className="joinView_container_box">
                    <input type="text" />
                </div>


                <p>Choose Team</p>
                <div className="joinView_container_box">
                    <img src={icon_ok} alt="" />
                    <p>Red</p>
                </div>
                <div className="joinView_container_box">
                    <img src={icon_nope} alt="" />
                    <p>Blue</p>
                </div>
                <div className="joinView_container_box">
                    <img src={icon_nope} alt="" />
                    <p>Yellow</p>
                </div>
                <div className="joinView_container_box">
                    <img src={icon_nope} alt="" />
                    <p>Green</p>
                </div>


                <Link style={{ textDecoration: 'none' }} to="/playerlobby"><div id="joinGameBtn" className="joinView_container_box"><p>Join</p></div></Link>

            </form>
            
        </div>

    </div>
  );
}
