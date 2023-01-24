import * as React from 'react';
import { generateMathProblem } from './components/GenerateMathProblem';


export interface IAppProps {
}

export default function MathView (props: IAppProps) {

    const [mathProblem, setMathProblem] = React.useState<{answer: number; question: string}>({answer: 0, question: "0 x 0"})
    const [userPoints, setUserPoints] = React.useState<number>(0)


    // User clicking number buttons to answer math question, a new problem are generated regardless of correct or wrong. 
    function handleClick(index:number) {
      if (index === mathProblem.answer) {
        setUserPoints(userPoints + 1)
      } else {
        console.log("wrong")
      }
      setMathProblem(generateMathProblem())
    }

  

    // Generating answer boxes
    const numberboxes = () => {

      // Populate array with numbers from 1 to 100
      let array = Array.from({length: 100}, (e, i)=> i)
      
      // Mapping out all numbers in array, styling them in a blue square  
      return ( <> { array.map((box, i) => { return (<div key={i} onClick={() => handleClick(i + 1)} className="mathView_answer_box_number" ><p>{i + 1}</p></div>) }) } </> )
      
    } // En of numberboxes()



    // Display the first math problem when the page load
    React.useEffect(() => { setMathProblem(generateMathProblem()) }, [])



  return (
    <div className='mathView'>
      <div className="mathView_question">
        <div className="mathView_question_box"><p>{mathProblem.question}</p><p>{`${userPoints} points`}</p></div>
      </div>
      <div className="mathView_answer">
        <div className="mathView_answer_box">
            {numberboxes()} 
        </div>
      </div>
    </div>
  );
}
