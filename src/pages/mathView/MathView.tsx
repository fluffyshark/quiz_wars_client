import * as React from 'react';

export interface IAppProps {
}

export default function MathView (props: IAppProps) {

  
    // Generating answer boxes
    const numberboxes = () => {

        let array = Array.from({length: 100}, (e, i)=> i)
        
        return (
            <>
            {
                array.map((box, i) => {
                 
                    return (<div key={i} className="mathView_answer_box_number" ><p>{i + 1}</p></div>)
                 
                })
            }
            </>
        )


       
    }


  return (
    <div className='mathView'>
      <div className="mathView_question">
        <div className="mathView_question_box"><p>6 x 4</p></div>
      </div>
      <div className="mathView_answer">
        <div className="mathView_answer_box">
            {numberboxes()} 
            
            
        </div>
      </div>
    </div>
  );
}
