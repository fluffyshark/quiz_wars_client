import * as React from 'react';

export interface IAppProps {
}

export default function GameSelect (props: IAppProps) {
  return (
    <div className='gameSelect'>
      
        <div className="gameSelect_title">
            <p>Quiz Wars</p>
        </div>
      
        <div className="gameSelect_select">
            <div className="gameSelect_select_title"><p>Choose Game Type</p></div>
            <div className="gameSelect_select_buttonSection">
                <div id="choose_addition" className="gameSelect_select_buttonSection_button"><p>Addition</p><p>Biggest number</p><p>20 + 20</p></div>
                <div id="choose_substraction" className="gameSelect_select_buttonSection_button"><p>Substraction</p><p>Biggest number</p><p>20 - 20</p></div>
                <div id="choose_multiplication" className="gameSelect_select_buttonSection_button"><p>Multiplication</p><p>Biggest number</p><p>10 x 10</p></div>
                <div id="choose_division" className="gameSelect_select_buttonSection_button"><p>Division</p><p>Biggest number</p><p>20 + 20</p></div>
            </div>
        </div>
      
        <div className="gameSelect_start">
            <div className="gameSelect_start_button"><p>Start Game</p></div>
        </div>

    </div>
  );
}
