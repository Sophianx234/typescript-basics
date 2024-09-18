import { ReactNode } from "react";
import { handleGoalState } from "../App";
import CourseGoal  from "./CourseGoal";
import InfoBox from "./InfoBox";

type GoalListProps = {
    goals: handleGoalState[];
    onDelete: (id:number)=>void
}

export default function CourseGoalList({goals, onDelete}:GoalListProps){
    if(goals.length === 0){
        return <InfoBox type="hint">
            You have no course goals yet. Start adding some!
        </InfoBox>
    }
    let warningBox : ReactNode;
    if(goals.length >=4){
        warningBox = <InfoBox type="warning">
            You're collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
    }
    return(
        <>
    {warningBox}
         <ul>

    {
      goals.map(goal=>
      <li key={goal.id}>

      <CourseGoal onDelete={onDelete} title={goal.title} description={goal.description} id={goal.id} />
      </li>
      )
     }
     </ul>
        </>
    )
}