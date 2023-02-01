import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';
import { useSelector, useDispatch } from "react-redux"
import { generateMathProblem } from './components/GenerateMathProblem';
import { add_points } from "../../redux/UserReducer"
import { add_users_point_to_region } from "../../redux/RegionReducer"
import icon_toMap from "../../images/generall/icon_toMap.png"
import { Link } from 'react-router-dom';


interface SocketProps {
  socket: SocketIOClient.Socket;
}



export default function MathView ({socket}:SocketProps) {
    
    const [mathProblem, setMathProblem] = React.useState<{answer: number; question: string}>({answer: 0, question: "0 x 0"})
    const [userPoints, setUserPoints] = React.useState<number>(0)


    const dispatch = useDispatch()
    const userData = useSelector((state:any) => state.user.value)

    

    // User clicking number buttons to answer math question, a new problem are generated regardless of correct or wrong. 
    function handleClick(index:number) {
      // If user clicks the button which number match the answer of the current math question
      if (index === mathProblem.answer) {
        // User points increase by 1
        setUserPoints(userPoints + 1)
        // One point is sent and added to userData in UserReducer
        dispatch(add_points({points: 1}))
        // One point is sent and added to your_points in RegionData in RegionReducer
        dispatch(add_users_point_to_region({id: userData.selectedRegionId, points: 1}))
        // One point is sent to server by socket together with the current region (and other data to direct where the point should be added) 
        socket.emit("user_got_point", {userName:"Robin", points:1, regionId:userData.selectedRegionId, gameCode:123456789, team:userData.team});
      } else {
        console.log("wrong")
      }
      // A new math problem are generated and displayed through local state
      setMathProblem(generateMathProblem())
    }

    

    // Generating answer boxes
    const numberboxes = () => {

      // Populate array with numbers from 1 to 100
      let array = Array.from({length: 100}, (e, i)=> i)
      
      // Mapping out all numbers in array, styling them in a blue square  
      return ( <> { array.map((box, i) => { return (<div key={i} onClick={() => handleClick(i + 1)} className="mathView_answer_box_number" ><p>{i + 1}</p></div>) }) } </> )
      
    } // End of numberboxes()



    // Display the first math problem when the page load
    React.useEffect(() => { setMathProblem(generateMathProblem()) }, [])



  return (
    <div className='mathView'>
      <div className="mathView_question">
        <div className="mathView_question_box">
          <Link to="/regionselect"><img src={icon_toMap} alt="toMapImg" /></Link>
          <p>{mathProblem.question}</p>
          <p>{`${userPoints} points`}</p></div>
      </div>
      <div className="mathView_answer">
        <div className="mathView_answer_box">
            {numberboxes()} 
        </div>
      </div>
    </div>
  );
}
