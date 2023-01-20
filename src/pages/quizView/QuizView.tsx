import * as React from 'react';

export interface IAppProps {
}

export default function QuizView (props: IAppProps) {
  return (
    <div className='quizView'>
        <div className="quizView_title"><p>Quiz Wars</p></div>
        <div className="quizView_question"><p>När föddes Gustav Vasa?</p></div>
        <div className="quizView_answers">
            <div className="quizView_answers_box"><p>Answer alt 1</p></div>
            <div className="quizView_answers_box"><p>Answer alt 2</p></div>
            <div className="quizView_answers_box"><p>Answer alt 3</p></div>
            <div className="quizView_answers_box"><p>Answer alt 4</p></div>
        </div>
    </div>
  );
}
